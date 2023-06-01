import './App.css';
import { useState } from 'react';

function App() {

  const [display, setDisplay] = useState('0');


  const inputNum = (value) => {
    if (display === '0')
      setDisplay(value + '')
    else
      setDisplay(display + '' + (value));

  }

  const addOperator = (value) => {

    if (value === '.') {
      var check = true;
      for (var i = display.length - 1; i >= 0; i--) {
        if (display.charAt(i) === '+' || display.charAt(i) === '-' || display.charAt(i) === '*' || display.charAt(i) === '/')
          break;
        if (display.charAt(i) === '.')
          check = false;
      }
      if (check === true)
        setDisplay(display + '.')
    }
    else {
      if (!isNaN(display.charAt(display.length - 1))) {
        setDisplay(display + value)
      }
      else {
        if (display.charAt(display.length - 1) === '-' && isNaN(display.charAt(display.length - 2)))
          setDisplay(display.slice(0, -2) + value)
        else if (value !== '-') {
          setDisplay(display.slice(0, -1) + value)
        }
        else {
          if (display.charAt(display.length - 1) !== '-')
            setDisplay(display + value);
        }
      }
    }
  }


  const calculate = () => {
    if (!isNaN(display.charAt(display.length - 1)))
      setDisplay(eval(display) + '');
    else
      setDisplay(eval(display.slice(0, -1)) + '')
  }


  return (
    <div className="App">
      <div className='calculator'>
        <div id="display" className='display'>{display}</div>
        <div>
          <button id="clear" style={{ width: "134px" }} onClick={() => setDisplay('0')}>AC</button>
          <button id="divide" onClick={() => addOperator('/')}>/</button>
          <br />

          <button id="seven" onClick={() => inputNum('7')}>7</button>
          <button id="eight" onClick={() => inputNum('8')}>8</button>
          <button id="nine" onClick={() => inputNum('9')}>9</button>
          <button id="subtract" onClick={() => addOperator('-')}>-</button><br />
          <button id="four" onClick={() => inputNum('4')}>4</button>
          <button id="five" onClick={() => inputNum('5')}>5</button>
          <button id="six" onClick={() => inputNum('6')}>6</button>
          <button id="add" onClick={() => addOperator('+')}>+</button><br />
          <button id="one" onClick={() => inputNum('1')}>1</button>
          <button id="two" onClick={() => inputNum('2')}>2</button>
          <button id="three" onClick={() => inputNum('3')}>3</button>
          <button id="multiply" onClick={() => addOperator('*')}>x</button>
          <br />

          <button id="zero" onClick={() => inputNum(0)} style={{ width: "89px" }}>0</button>
          <button id="decimal" onClick={() => addOperator('.')}>.</button>
          <button id="equals" onClick={calculate}>=</button>

        </div>

      </div>

    </div>
  );
}

export default App;
