import React, { useContext } from "react";
import styles from "./KeyboardButton.module.css";
import { BoxContext } from "../../Context/Context";
import { KEYBOARD } from "../../Context/ActionTypes";

const KeyboardButton = () => {
  const { state, dispatch } = useContext(BoxContext);

  const toggleKeyboard = () => {
    dispatch({
      type: KEYBOARD,
    });
  };

  return (
    <div className={styles.btnContainer}>
      <label className={styles.label}>
        Click here to Turn {state.keyboard === true ? "OFF" : "ON"} keyboard
      </label>
      <button
        className={styles.button}
        style={
          state.keyboard === true
            ? { backgroundColor: "green" }
            : { backgroundColor: "red" }
        }
        onClick={() => toggleKeyboard()}
      >
        {state.keyboard === true ? "ON" : "OFF"}
      </button>
    </div>
  );
};

export default KeyboardButton;
