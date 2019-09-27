import { ReactMailViewer } from "../lib/index.js"

class ReactMailViewer__Example1 extends React.PureComponent {
  render(){
    return React.createElement(Container, {}, [
      React.createElement(ReactMailViewer, { key: "rmv" }),
    ])
  }
}

ReactDOM.render(React.createElement(ReactMailViewer__Example1), document.getElementById("react1"))
