import React, { useReducer } from 'react'
import styles from './App.module.css'
import { BoxContext } from './Context/Context'
import { reducer } from './Context/Reducer'
import BoxContainer from './Components/BoxContainer/BoxContainer'
import { Button } from './Components/AddButton/Button'
import KeyboardButton from './Components/KeyboardButton/KeyboardButton'

export const initialState = {
  boxesArr: [
    {
      id: 1,
      selected: false,
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
    }
  ],
  keyboard: false
}
function App () {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log('state', state)
  return (
    <BoxContext.Provider value={{ state, dispatch }}>
      <div className={styles.container}>
        <div className={styles.top}>
          <Button></Button>
          <p className={styles.info}>
            * Use "A", "S", "D", "W" keys to move box
          </p>
          <p className={styles.warn}>
            !Please switch on keyboard before moving boxes
          </p>
          <KeyboardButton></KeyboardButton>
        </div>
        <BoxContainer></BoxContainer>
      </div>
    </BoxContext.Provider>
  )
}

export default App
