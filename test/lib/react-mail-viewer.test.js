const assert = require("assert")

const { expect } = require("chai")

const ReactMailViewer = require("../../lib/react-mail-viewer")

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

const test = () => {
  describe("load", () => {
    it("loaded",  () => expect(ReactMailViewer && true).to.equal(true))
    it("version", () => expect(ReactMailViewer && ReactMailViewer.version && true).to.equal(true))
  })

  describe("mails2list", () => {
    it("full", () => {
      const mail2child = mail => ({mail})
      const child2li   = (child, key) => ({child, key})
      const children2ul = children => children
      const mails = [
        { date: "2016/7/16", from: "takanori.yanagitani@gmail.com", to: "takanori.yanagitani@gmail.com", subject: "hw" },
        { date: "2016/7/17", from: "takanori.yanagitani@gmail.com", to: "takanori.yanagitani@gmail.com", subject: "hw2" },
      ]
      assert.deepStrictEqual([], ReactMailViewer.mails2list({mail2child, child2li, children2ul, mails: null}))
      assert.deepStrictEqual(
        [
          {
            key: 0,
            child: { mail: { date: "2016/7/16", from: "takanori.yanagitani@gmail.com", to: "takanori.yanagitani@gmail.com", subject: "hw" } },
          },
          {
            key: 1,
            child: { mail: { date: "2016/7/17", from: "takanori.yanagitani@gmail.com", to: "takanori.yanagitani@gmail.com", subject: "hw2" } },
          },
        ],
        ReactMailViewer.mails2list({mail2child, child2li, children2ul, mails})
      )
    })
  })
  
  describe("mail2dl", () => {
    const t2d = ({term, detail}) => ([ { tag: "dt", text: term }, { tag: "dd", text: detail             } ])
    const d2d = ({term, detail}) => ([ { tag: "dt", text: term }, { tag: "dd", text: Date.parse(detail) } ])
    const c2d = ({term, detail}) => ([ { tag: "dt", text: term }, { tag: "dd", pre:  (detail||{}).body  } ])

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

    it("no date",   () => {
      const mail = {
        date:    undefined,
        from:    "takanori.yanagitani@gmail.com",
        to:      "takanori.yanagitani@gmail.com",
        subject: "test subject 1",
        content: {
          type: "text/plain",
          body: "helo this is content body.\n",
        },
      }
      const params = {
        mail,
        text2detail:    t2d,
        date2detail:    d2d,
        content2detail: c2d,
      }
      const o = ReactMailViewer.mail2dl(params)
      const e = [
        [{tag: "dt", text: "Date"    }, {tag: "dd", text: Number.parseFloat("nan")}],
        [{tag: "dt", text: "From"    }, {tag: "dd", text: "takanori.yanagitani@gmail.com"}],
        [{tag: "dt", text: "To"      }, {tag: "dd", text: "takanori.yanagitani@gmail.com"}],
        [{tag: "dt", text: "Subject" }, {tag: "dd", text: "test subject 1"}],
        [{tag: "dt", text: "Content" }, {tag: "dd", pre:  "helo this is content body.\n"}]
      ]
      expect(o).to.deep.equal(e)
    })

    it("no from",   () => {
      const mail = {
        date:    "Sat, 09 Nov 2019 18:41:56 -0800",
        from:    undefined,
        to:      "takanori.yanagitani@gmail.com",
        subject: "test subject 1",
        content: {
          type: "text/plain",
          body: "helo this is content body.\n",
        },
      }
      const params = {
        mail,
        text2detail:    t2d,
        date2detail:    d2d,
        content2detail: c2d,
      }
      const o = ReactMailViewer.mail2dl(params)
      const e = [
        [{tag: "dt", text: "Date"    }, {tag: "dd", text: 1573353716000}],
        [{tag: "dt", text: "From"    }, {tag: "dd", text: ""}],
        [{tag: "dt", text: "To"      }, {tag: "dd", text: "takanori.yanagitani@gmail.com"}],
        [{tag: "dt", text: "Subject" }, {tag: "dd", text: "test subject 1"}],
        [{tag: "dt", text: "Content" }, {tag: "dd", pre:  "helo this is content body.\n"}]
      ]
      expect(o).to.deep.equal(e)
    })

    it("no to",   () => {
      const mail = {
        date:    "Sat, 09 Nov 2019 18:41:56 -0800",
        from:    "takanori.yanagitani@gmail.com",
        to:      undefined,
        subject: "test subject 1",
        content: {
          type: "text/plain",
          body: "helo this is content body.\n",
        },
      }
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
        [{tag: "dt", text: "To"      }, {tag: "dd", text: ""}],
        [{tag: "dt", text: "Subject" }, {tag: "dd", text: "test subject 1"}],
        [{tag: "dt", text: "Content" }, {tag: "dd", pre:  "helo this is content body.\n"}]
      ]
      expect(o).to.deep.equal(e)
    })

    it("no subject",   () => {
      const mail = {
        date:    "Sat, 09 Nov 2019 18:41:56 -0800",
        from:    "takanori.yanagitani@gmail.com",
        to:      "takanori.yanagitani@gmail.com",
        subject: undefined,
        content: {
          type: "text/plain",
          body: "helo this is content body.\n",
        },
      }
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
        [{tag: "dt", text: "Subject" }, {tag: "dd", text: ""}],
        [{tag: "dt", text: "Content" }, {tag: "dd", pre:  "helo this is content body.\n"}]
      ]
      expect(o).to.deep.equal(e)
    })

    it("no content",   () => {
      const mail = {
        date:    "Sat, 09 Nov 2019 18:41:56 -0800",
        from:    "takanori.yanagitani@gmail.com",
        to:      "takanori.yanagitani@gmail.com",
        subject: "test subject 1",
        content: undefined,
      }
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
        [{tag: "dt", text: "Content" }, {tag: "dd", pre:  undefined}]
      ]
      expect(o).to.deep.equal(e)
    })

    it("no date func",   () => {
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
      const params = {
        mail,
        text2detail:    t2d,
        date2detail:    undefined,
        content2detail: c2d,
      }
      const o = ReactMailViewer.mail2dl(params)
      const e = [
        [{tag: "dt", text: "Date"    }, {tag: "dd", text: "Sat, 09 Nov 2019 18:41:56 -0800"}],
        [{tag: "dt", text: "From"    }, {tag: "dd", text: "takanori.yanagitani@gmail.com"}],
        [{tag: "dt", text: "To"      }, {tag: "dd", text: "takanori.yanagitani@gmail.com"}],
        [{tag: "dt", text: "Subject" }, {tag: "dd", text: "test subject 1"}],
        [{tag: "dt", text: "Content" }, {tag: "dd", pre:  "helo this is content body.\n"}]
      ]
      expect(o).to.deep.equal(e)
    })
  })
}

module.exports = { test }
