import React, {useReducer} from 'react';
import reducer, {initialState} from './reducers/index';

import {applyNumber, changeOperation, clearDisplay, memoryPlus, memoryClear} from './actions/index';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {

  // using useReducer hook to get access to the application state and the dispatch function
  const [state, dispatch] = useReducer(reducer, initialState);

  // addOne event handler
  // const addingOne = (value) => {
  //   console.log('1 clicked')
  //   dispatch(addOne(value));
  // }

  // addNumber event handler
  const addEvent = (number) => {
    // console.log('1 clicked')
    dispatch(applyNumber(number));
  }

  // operatorEvent
  const oppEvent = (opp) => {
    dispatch(changeOperation(opp));
  }

  // clearDisplay event
  const clearEvent = () => {
    dispatch(clearDisplay());
  }

  // memoryPlus event
  const memPlus = (memory) => {
    dispatch(memoryPlus(memory));
  }

  // memoryClear event
  const memClear = () => {
    dispatch(memoryClear());
  }


  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={() => memPlus(state.total)} value={"M+"}/>
              <CalcButton onClick={() => addEvent(state.memory)} value={"MR"}/>
              <CalcButton onClick={memClear} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => addEvent(1)} value={1}/>
              <CalcButton onClick={() => addEvent(2)} value={2}/>
              <CalcButton onClick={() => addEvent(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => addEvent(4)} value={4}/>
              <CalcButton onClick={() => addEvent(5)} value={5}/>
              <CalcButton onClick={() => addEvent(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => addEvent(7)} value={7}/>
              <CalcButton onClick={() => addEvent(8)} value={8}/>
              <CalcButton onClick={() => addEvent(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => oppEvent('+')} value={"+"}/>
              <CalcButton onClick={() => oppEvent('*')} value={"*"}/>
              <CalcButton onClick={() => oppEvent('-')} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={clearEvent} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
