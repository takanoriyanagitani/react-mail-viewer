const React = require("react")

const Enzyme = require("enzyme")

const { expect } = require("chai")

const {
  shallow,
  render,
} = Enzyme

const Adapter = require("enzyme-adapter-react-16")

Enzyme.configure({ adapter: new Adapter() })

const { ReactMailViewer } = require("../lib/react-mail-viewer")

describe("<Year />", () => {
  const year = 2019

  it("shallow",  () => {
    const e = React.createElement(ReactMailViewer.Year, { year })
    expect(shallow(e).contains(React.createElement("li", { className: "ReactMailViewer_Year" }, year)))
    .to.equal(true)
  })

  it("render",  () => {
    expect(render(React.createElement(ReactMailViewer.Year, { year })).text())
    .to.equal(year+"")
  })
})

describe("<Year />(list-group-item)", () => {
  const year = 2019

  it("shallow",  () => {
    const cn_year = "list-group-item"
    const e = React.createElement(ReactMailViewer.Year, { year, cn_year })
    expect(shallow(e).contains(React.createElement("li", { className: "list-group-item" }, year)))
    .to.equal(true)
  })
})

describe("<Years />", () => {
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

  it("shallow",  () => {
    const e = React.createElement(ReactMailViewer.Years, { years })
    const mapped = years.map((year, key) => React.createElement(ReactMailViewer.Year, { key, year }))
    expect(shallow(e).contains(React.createElement("ul", { className: "ReactMailViewer_Years" }, mapped)))
    .to.equal(true)
  })

  it("render",  () => {
    expect(render(React.createElement(ReactMailViewer.Years, { years })).text())
    .to.equal(years.join(""))
  })
})

describe("<Years />(list-group, list-group-item)", () => {
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

  const {
    cn_year,
    cn_years,
  } = classNames

  it("shallow",  () => {
    const e = React.createElement(ReactMailViewer.Years, { years, classNames })
    const mapped = years.map((year, key) => React.createElement(ReactMailViewer.Year, { key, year, cn_year }))
    expect(shallow(e).contains(React.createElement("ul", { className: cn_years }, mapped)))
    .to.equal(true)
  })
})

describe("<Years />(empty)", () => {
  const years = null

  it("shallow",  () => {
    const e = React.createElement(ReactMailViewer.Years, { years })
    const mapped = []
    expect(shallow(e).contains(React.createElement("ul", { className: "ReactMailViewer_Years" }, mapped)))
    .to.equal(true)
  })

  it("render",  () => {
    expect(render(React.createElement(ReactMailViewer.Years, { years })).text())
    .to.equal("")
  })
})
