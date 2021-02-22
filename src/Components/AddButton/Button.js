import React, { useContext } from "react";
import styles from "./Button.module.css";
import { BoxContext } from "../../Context/Context";
import { ADD_BOX } from "../../Context/ActionTypes";

export const Button = (props) => {
  const { state, dispatch } = useContext(BoxContext);
  const handleAddBox = () => {
    dispatch({
      type: ADD_BOX,
      payload: {
        id: state.boxesArr.length + 1,
        selected: false,
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
      },
    });
  };

  return (
    <div>
      <button
        className={styles.button}
        onClick={() => handleAddBox()}
        {...props}
      >
        Add Box
      </button>
    </div>
  );
};
