import React, { Component } from "react";

export default function Main() {
  debugger;
  return (
    <div>
      <ClassComponent title="This is a prop" />
      <FunctionComponent title="Another prop" />
    </div>
  );
}

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 10,
      techstack: ["Node", "React", "Javascript", "Docker"],
    };
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>Count: {this.state.value}</p>
        <button
          onClick={() =>
            this.setState({
              value: this.state.value + 1,
            })
          }
        >
          +1
        </button>
        <button
          onClick={() =>
            this.setState({
              value: this.state.value - 1,
            })
          }
        >
          -1
        </button>
        <ul>
          {this.state.techstack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const FunctionComponent = ({ title }) => {
  const [value, setValue] = React.useState("");
  return (
    <div>
      <h1>{title}</h1>
      <input value={value} onChange={({ target }) => setValue(target.value)} />
    </div>
  );
};
