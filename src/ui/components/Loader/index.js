import { Tabs } from "../../components";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import style from "./styles";
import spinner from "../../../assets/svg/spinner.svg";

const Loader = ({ ...props }) => {
  const { classes } = props;

  return (
    <>
      <div className={classes.container}>
        <img src={spinner} alt="" />,
      </div>
    </>
  );
};

Loader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(style)(Loader);
