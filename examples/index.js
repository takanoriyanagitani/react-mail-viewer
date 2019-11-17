const sample_mail = {
  date:    "Sat, 09 Nov 2019 18:41:56 -0800",
  from:    "takanori.yanagitani@gmail.com",
  to:      "takanori.yanagitani@gmail.com",
  subject: "sample subject",
  content: {
    type: "text/plain",
    body: "hw\nthis\nis\nsample\nbody",
  },
}

const sample_text2detail = ({term, detail}) => [
  React.createElement("dt", { key: "term"   }, term  ),
  React.createElement("dd", { key: "detail" }, detail),
]

const sample_date2detail = ({term, detail}) => [
  React.createElement("dt", { key: "term"   }, term  ),
  React.createElement("dd", { key: "detail" }, new Date(Date.parse(detail)).toLocaleString()),
]

const sample_content2detail = ({term, detail}) => [
  React.createElement("dt", { key: "term"   }, term),
  React.createElement("dd", { key: "detail" }, React.createElement("pre", {}, detail && detail.body)),
]

class SampleMailViewer extends React.PureComponent {
  render(){
    const { mail } = this.props
    return React.createElement("dl", {}, ReactMailViewer.mail2dl({
      mail,
      text2detail:    sample_text2detail,
      date2detail:    sample_date2detail,
      content2detail: sample_content2detail,
    }))
  }
}

ReactDOM.render(
  React.createElement(SampleMailViewer, { mail: sample_mail }),
  document.getElementById("root")
)
