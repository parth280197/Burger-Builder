import React from "react";
import classes from "../modal/modal.module.css";
import Backdrop from "../backdrop/backdrop";

const modal = props => {
  return (
    <>
      <Backdrop show={props.visible} closed={props.purchaseHandler} />
      <div
        className={classes.Modal}
        style={{
          transform: props.visible ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.visible ? 1 : 0
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default modal;
