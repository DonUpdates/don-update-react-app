import PropTypes from 'prop-types';
import React from 'react';
import style from './styles';
import { withStyles } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import Share from '@material-ui/icons/ShareOutlined';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const CustomPopover = ({ ...props }) => {
    const { classes, content } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
  
  return (
    <div>
      <Share className={classes.shareButton} onClick={handleClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className={classes.shareDiv}>
          <div className={classes.shareItem}>
            <FacebookShareButton
              url="https://donupdates.in"
              quote={content}
              hashtag="#DonUpdates"
            >
              <FacebookIcon size={24} round iconFillColor="white" />
            </FacebookShareButton>
          </div>
          <div className={classes.shareItem}>
            <WhatsappShareButton
              url="https://donupdates.in"
              title={content}
              hashtag="#DonUpdates"
            >
              <WhatsappIcon size={24} round iconFillColor="white" />
            </WhatsappShareButton>
          </div>
          <div className={classes.shareItem}>
            <TwitterShareButton
              url="https://donupdates.in"
              title={content}
              hashtag="#DonUpdates"
            >
              <TwitterIcon size={24} round iconFillColor="white" />
            </TwitterShareButton>
          </div>
        </div>
      </Popover>
    </div>
  );
};

CustomPopover.propTypes = {
    classes: PropTypes.object.isRequired,
    content: PropTypes.string,
};

export default withStyles(style)(CustomPopover);