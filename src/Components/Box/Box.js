import React, { useContext, useCallback } from "react";
import styles from "./Box.module.css";
import { BoxContext } from "../../Context/Context";
import { DELETE_BOX, SELECT_BOX, MOVE_BOX } from "../../Context/ActionTypes";

let Box = (k) => {
  const { state, dispatch } = useContext(BoxContext);
  // call back function after keypress & A S D W keys are detected on keyCode & dispatches action
  const keypressed = useCallback(
    (e) => {
      console.log("calling keypressed", e.keyCode);
      e.preventDefault();
      if (e.keyCode === 65 || e.keyCode === 37) {
        dispatch({
          type: MOVE_BOX,
          payload: "left",
        });
      } else if (e.keyCode === 83 || e.keyCode === 40) {
        dispatch({
          type: MOVE_BOX,
          payload: "right",
        });
      } else if (e.keyCode === 68 || e.keyCode === 39) {
        dispatch({
          type: MOVE_BOX,
          payload: "top",
        });
      } else if (e.keyCode === 87 || e.keyCode === 38) {
        dispatch({
          type: MOVE_BOX,
          payload: "bottom",
        });
      } else if (e.keyCode === 46) {
        dispatch({
          type: DELETE_BOX,
        });
      }
    },
    [dispatch]
  );
  // Keyboard Event Lister
  if (state.keyboard === true) {
    // window.addEventListener("keypress", keypressed);
    window.addEventListener("keydown", keypressed);
  }

  // dispatches action after clicking on box (selects the box)

  const handleSelect = (id) => {
    dispatch({
      type: SELECT_BOX,
      payload: id,
    });
  };

  return (
    <>
      {state.boxesArr.map((item, index) => (
        <div
          className={styles.box}
          key={index}
          style={
            item.selected === true
              ? {
                  position: "relative",
                  zIndex: item.id,
                  boxShadow: "0 0 15px rgb(158, 158, 158)",
                  backgroundColor: "rgb(50, 140, 251)",
                  transform: `translate(${item.right}px, ${item.bottom}px)`,
                }
              : {
                  position: "relative",
                  zIndex: item.id,
                  transform: `translate(${item.right}px, ${item.bottom}px)`,
                }
          }
          onClick={() => handleSelect(item.id)}
        >
          <div>
            <p className={styles.id}>{item.id}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Box;
