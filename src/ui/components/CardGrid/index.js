import { Card } from "../../components";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import style from "./styles";
import dataFetch from "../../../api/dataFetch";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from '../Loader';

const CardGrid = ({ ...props }) => {
  const [data, setData] = React.useState([]);
  const [pageNo, setPageNo] = React.useState(1);

  const transformDateTime = (date) => {
    console.log(date);
    const dateValues = date.split(' ');
    if (dateValues[0] === new Date().toJSON().slice(0, 10)) {
      return convertFrom24To12Format(dateValues[1]);
    }
    else {
      const createdDate = new Date(dateValues[0]);
      return `${createdDate.getDate()} ${createdDate.toLocaleString('default', { month: 'long' }).substring(0, 3)}`;
    }
  }

  const convertFrom24To12Format = (time24) => {
    const [sHours, minutes] = time24.match(/([0-9]{1,2}):([0-9]{2})/).slice(1);
    const period = +sHours < 12 ? 'AM' : 'PM';
    const hours = +sHours % 12 || 12;
  
    return `${hours}:${minutes} ${period}`;
  }

  const fetchData = (category) => {
    dataFetch(pageNo, category).then((res) => {
      const result = res.data.data;
      setData((preNews) => [
        ...preNews,
        ...result.map((x) => {
          return {
            id: x.id,
            content: x.news,
            time: transformDateTime(x.created_at),
          };
        }),
      ]);
      setPageNo((prev) => prev + 1);
    });
  };

  React.useEffect(() => {
    fetchData(props.category);
    // eslint-disable-next-line
  }, []);

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={() => fetchData()}
      hasMore={true}
      loader={(<Loader />)}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {data &&
        data.length > 0 &&
        data.map((x, index) => (
          <Card
            key={index}
            content={x.content}
            time={x.time}
          />
        ))}
    </InfiniteScroll>
  );
};

CardGrid.propTypes = {
  category: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(style)(CardGrid);
