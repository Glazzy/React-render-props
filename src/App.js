import React from "react";
import "./styles.css";
import WindowWidth from "./WindowWidth";

export default function App() {
  //provides a way to pass the state down and use them in new components that implement their own logic

  const MinWidth = props => {
    return (
      <WindowWidth>
        {width => (width > props.minWidth ? props.render(width) : null)}
      </WindowWidth>
    );
  };

  // Second way of writing it

  /* 
const MinWidth = (props) => {
  return <WindowWidth render={width => (width > props.minWidth ? props.render(width) : null)} />
}; 
*/

  return (
    <div className="App">
      <MinWidth
        minWidth={500}
        render={width => <div>The width is currently {width}</div>}
      />
    </div>
  );
}
