import React from "react";

class WindowWidth extends React.Component {
  constructor() {
    super();
    this.state = { width: 0 };
  }

  componentDidMount() {
    this.setState({ width: window.innerWidth }, () =>
      window.addEventListener("resize", ({ target }) =>
        this.setState({ width: target.innerWidth })
      )
    );
  }

  render() {
    // Second way of writing it , where we use a render prop instead
    /*
    return this.props.render(this.state.width)
    */

    // here we use the children of the <WindowWidth> .{children}. </WindowWidth>
    return this.props.children(this.state.width);
  }
}

export { WindowWidth as default };
