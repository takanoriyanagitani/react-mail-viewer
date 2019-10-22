((g, f) => {
  const c = "object"   === typeof exports && "undefined" !== typeof module
  /* istanbul ignore next */
  const a = "function" === typeof define  && define.amd
  /* istanbul ignore next */
  switch(c && "common" || a && "amd"){
    /* istanbul ignore next */
    default:    return Object.assign(g, f({
      React: g.React,
    }))
    /* istanbul ignore next */
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
        const {
          year,
          cn_year,
        } = this.props
        return React.createElement("li", { className: cn_year || "ReactMailViewer_Year" }, year)
      }
    }
    class Years extends React.PureComponent {
      render(){
        const {
          years,
          classNames,
        } = this.props
        const {
          cn_years,
          cn_year,
        } = classNames || {}
        const f = (year, key) => React.createElement(Year, { key, year, cn_year })
        const mapped = years && years.map && years.map(f) || []
        return React.createElement("ul", { className: cn_years || "ReactMailViewer_Years" }, mapped)
      }
    }
    const ReactMailViewer = {
      Years,
      Year,
    }
    return { ReactMailViewer }
  }
)
