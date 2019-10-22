const React = require("react")

const Enzyme = require("enzyme")

const {
  shallow,
  mount,
  render,
} = Enzyme

const Adapter = require("enzyme-adapter-react-16")

Enzyme.configure({ adapter: new Adapter() })

const { ReactMailViewer } = require("../lib/react-mail-viewer")

describe("<Year />", () => {
  const year = 2019

  it("shallow",  () => {
    const e = React.createElement(ReactMailViewer.Year, { year })
    expect(shallow(e).contains(React.createElement("div", { className: "ReactMailViewer_Year" }, year)))
    .toBe(true)
  })

  it("mount",  () => {
    expect(mount(React.createElement(ReactMailViewer.Year, { year })).find(".ReactMailViewer_Year").length)
    .toBe(1)
  })

  it("render",  () => {
    expect(render(React.createElement(ReactMailViewer.Year, { year })).text())
    .toBe(year+"")
  })
})
