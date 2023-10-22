import { useState } from "react";

function App() {
  const [array, setArray] = useState(["A", "B", "C"]);
  const [value, setValue] = useState("");

  //not to change state
  //state is immutable
  //array should not /cannot use array.push("something")

  function AddLetteratIndex(letter, index) {
    setArray(currentArray => {
      return [...currentArray.slice(0, index), letter, currentArray.slice(index)]
    })
  }
  function update() {
    setArray((currentArray) => {
      return currentArray.map((element) => {
        if (element === "A") {
          return "H";
        } else {
          return element;
        }
      });
    });
  }

  function reset() {
    setArray(["A", "B", "C"]);
  }

  function clear() {
    setArray([]);
  }
  function addStart(letter) {
    setArray((currentArray) => {
      return [letter, ...currentArray];
    });
  }
  function addEnd(letter) {
    setArray((currentArray) => {
      return [...currentArray, letter];
    });
  }

  function removeA() {
    setArray((currentArray) => currentArray.filter((item) => item !== "A"));
  }

  function removeB() {
    setArray((currentArray) => currentArray.filter((item) => item !== "B"));
  }

  function removeC() {
    setArray((currentArray) => currentArray.filter((item) => item !== "C"));
  }
  function removeFirstElement() {
    setArray((currentArray) => currentArray.splice(1));
  }

  return (
    <div>
      {array.join(" ")}
      <br />
      <button onClick={removeFirstElement}>Remove 1st Element</button>
      <br />
      <button onClick={removeA}>Remove A</button>
      <br />
      <button onClick={removeB}>Remove B</button>
      <br />
      <button onClick={removeC}>Remove C</button>
      <br />
      <button onClick={() => addStart("G")}>Add to Start</button>
      <br />
      <button onClick={() => addEnd("S")}>Add to end</button>

      <br />
      <button onClick={clear}>Clear</button>

      <br />
      <button onClick={reset}>Reset</button>

      <br />
      <button onClick={update}>Update</button>

      <br />
      <input value={value} onChange={e => setValue(e.target.value)} />
      <br />
      <button onClick={() => addStart(value)}>Add value</button>

      <br />
      <button onClick={() => AddLetteratIndex("C", 2)}>Update</button>

    </div>
  )
}


export default App;
