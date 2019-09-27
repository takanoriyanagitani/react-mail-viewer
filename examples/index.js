import { ReactMailViewer } from "../lib/index.js"

const {
  Container,
  Row,
  Col,
} = window.Reactstrap

class ReactMailViewer__Example1 extends React.PureComponent {
  render(){
    return React.createElement(Container, {}, [
      React.createElement(Row, { key: "r0" }, [
        React.createElement(Col, { key: "c0", xs: 12 }, "xs-12"),
        React.createElement(Col, { key: "c1", sm:  6 }, "sm-06"),
        React.createElement(Col, { key: "c2", md:  4 }, "md-04"),
        React.createElement(Col, { key: "c3", lg:  2 }, "lg-02"),
        React.createElement(Col, { key: "c4", xl:  1 }, "xl-01"),
      ]),
    ])
  }
}

ReactDOM.render(React.createElement(ReactMailViewer__Example1), document.getElementById("react1"))
