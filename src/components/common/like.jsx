import React from "react";

const Like = props => {
  const classes = props.liked ? "fa fa-heart" : "fa fa-heart-o";
  return (
    <i
      className={classes}
      style={{ cursor: "pointer" }}
      aria-hidden="true"
      onClick={props.onLikeToggle}
    />
  );
};

export default Like;
