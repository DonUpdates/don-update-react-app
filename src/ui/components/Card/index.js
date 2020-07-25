import PropTypes from "prop-types";
import React from "react";
import style from "./styles";
import { withStyles } from "@material-ui/core";
import PopOver from "../Popover";
import picture from '../../../assets/svg/picture.svg';
import pdf from '../../../assets/svg/pdf.svg';

const Card = ({ ...props }) => {
  const { classes, content, time } = props;
  const timeData = time.split(" ");
  return (
    <div className={classes.root}>
      <div className={classes.cardElement}>
        <div className={classes.timestampCircle}>
          <div className={classes.timeInner}>
            <span>{timeData[0]}</span>
            <span>{timeData[1]}</span>
          </div>
        </div>
        <div className={classes.content}>{content}</div>
        <div className={classes.rightItem}>
          <div className={classes.imageButton}>
            <img width="24" height="24" src={picture} alt="" />
          </div>
		  {/* <div><br /></div> */}
          <div className={classes.popover}>
            <PopOver content={content} />
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.string,
  header: PropTypes.string,
};

export default withStyles(style)(Card);
