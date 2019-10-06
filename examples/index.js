import { ReactMailViewer } from "../lib/index.js"

class ReactMailViewer__Example1 extends React.PureComponent {
  render(){
    return React.createElement("div", {}, [
      React.createElement(ReactMailViewer, {
        key: "rmv",
        data: {
          reload: () => {},
          date: {
            year:  (lbi, ubi) => [],
            month: year       => [],
            day:   month      => [],
            list:  day        => [],
            mail:  (list, i)  => {},
          },
          from: query => [],
          to:   query => [],
        },
      }),
    ])
  }
}

ReactDOM.render(React.createElement(ReactMailViewer__Example1), document.getElementById("react1"))
