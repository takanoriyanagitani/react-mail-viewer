class ReactMailViewer_Ex1 extends React.PureComponent {
  render(){
    const years = [
      2019,
      2018,
      2017,
      2016,
      2015,
      2014,
      2013,
      2012,
      2011,
    ]
    const classNames = {
      cn_years: "list-group",
      cn_year:  "list-group-item",
    }
    return React.createElement("div", {}, React.createElement(ReactMailViewer.Years, { years, classNames }))
  }
}

ReactDOM.render(
  React.createElement(ReactMailViewer_Ex1),
  document.getElementById("root")
)
