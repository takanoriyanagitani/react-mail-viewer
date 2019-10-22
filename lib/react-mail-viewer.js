((g, f) => {
  const c = "object"   === typeof exports && "undefined" !== typeof module
  const a = "function" === typeof define  && define.amd
  switch(c && "common" || a && "amd"){
    default:    return Object.assign(g, {ReactMailViewer: f({
      React: g.React,
    })})
    case "amd": return define([
      "react",
    ], f)
    case "common":
      module.exports = f({
        React: require("react"),
      })
      break
  }
})(
  this,
  lib => {
    const {
      React,
    } = lib
    class Year extends React.PureComponent {
      render(){
        const { year } = this.props
        return React.createElement("div", { className: "ReactMailViewer_Year" }, year)
      }
    }
    class Years extends React.PureComponent {
      render(){
        const { years } = this.props
        const f = (year, key) => React.createElement(Year, { key, year })
        const mapped = years && years.map && years.map(f) || []
        return React.createElement("div", { className: "ReactMailViewer_Years" }, mapped)
      }
    }
    const ReactMailViewer = {
      Years,
      Year,
    }
    return { ReactMailViewer }
  }
)
