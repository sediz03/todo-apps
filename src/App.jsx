import React, { useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState(0); // 결과값
  const [tempNumber, setTempNumber] = useState(1); //input값

  const onPlusButtonClickHandler = () => {
    setNumber(number + +tempNumber);
  };

  const onMinusButtonClickHandler = () => {
    setNumber(number - +tempNumber);
  };

  return (
    <div>
      {number}
      <br />
      <button onClick={onPlusButtonClickHandler}>+</button>
      <button onClick={onMinusButtonClickHandler}>-</button>
      <br />
      <input
        type="number"
        value={tempNumber}
        onChange={function (event) {
          setTempNumber(event.target.value);
        }}
      />
      <br />
    </div>
  );
}

export default App;
