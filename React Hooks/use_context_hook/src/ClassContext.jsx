import React, { Component } from "react";
import { ThemeContext } from "./ThemeProvider";

export default class ClassContext extends Component {
  themeStyles(dark) {
    return {
      backgroundColor: dark ? "#333" : "#ccc",
      color: dark ? "#ccc" : "#333",
      padding: "2rem",
      margin: "2rem",
    };
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {(darkTheme) => {
          return <div style={this.themeStyles(darkTheme)}>Class Theme</div>;
        }}
      </ThemeContext.Consumer>
    );
  }
}
