const { expect } = require("chai")

const ReactMailViewer = require("../lib/react-mail-viewer")

const izip = function*(i1, i2){
  for(const e1 of i1){
    const next = i2.next()
    const done = next.done
    const value = !done && next.value
    yield [
      e1,
      done ? null : value,
    ]
  }
}

describe("load", () => {
  it("loaded",  () => expect(ReactMailViewer && true).to.equal(true))
  it("version", () => expect(ReactMailViewer && ReactMailViewer.version && true).to.equal(true))
})

describe("mail2dl", () => {
  it("loaded", () => expect(ReactMailViewer && ReactMailViewer.mail2dl && true).to.equal(true))
  it("full",   () => {
    const mail = {
      date:    "Sat, 09 Nov 2019 18:41:56 -0800",
      from:    "takanori.yanagitani@gmail.com",
      to:      "takanori.yanagitani@gmail.com",
      subject: "test subject 1",
      content: {
        type: "text/plain",
        body: "helo this is content body.\n",
      },
    }
    const t2d = ({term, detail}) => ([ { tag: "dt", text: term }, { tag: "dd", text: detail             } ])
    const d2d = ({term, detail}) => ([ { tag: "dt", text: term }, { tag: "dd", text: Date.parse(detail) } ])
    const c2d = ({term, detail}) => ([ { tag: "dt", text: term }, { tag: "dd", pre:  detail.body        } ])
    const params = {
      mail,
      text2detail:    t2d,
      date2detail:    d2d,
      content2detail: c2d,
    }
    const o = ReactMailViewer.mail2dl(params)
    const e = [
      [{tag: "dt", text: "Date"    }, {tag: "dd", text: 1573353716000}],
      [{tag: "dt", text: "From"    }, {tag: "dd", text: "takanori.yanagitani@gmail.com"}],
      [{tag: "dt", text: "To"      }, {tag: "dd", text: "takanori.yanagitani@gmail.com"}],
      [{tag: "dt", text: "Subject" }, {tag: "dd", text: "test subject 1"}],
      [{tag: "dt", text: "Content" }, {tag: "dd", pre:  "helo this is content body.\n"}]
    ]
    expect(o).to.deep.equal(e)
  })
})
