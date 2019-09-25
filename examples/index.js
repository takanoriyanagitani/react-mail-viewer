import { ReactMailViewer } from "./lib/index.js"

class ReactMailViewer__Example1 extends React.PureComponent {
  render(){
    return React.createElement("div", {}, [
      React.createElement("div", {key: 0}, "this is div."),
      React.createElement("div", {key: 1}, React.createElement(ReactMailViewer)),
    ])
  }
}

ReactDOM.render(React.createElement(ReactMailViewer__Example1), document.getElementById("react1"))
