const sample_mails = [
  { date: "Sat, 11 Nov 2019 18:41:56 -0800", from: "takanori.yanagitani@gmail.com", to: "takanori.yanagitani@gmail.com", subject: "s3" },
  { date: "Sat, 10 Nov 2019 18:41:56 -0800", from: "takanori.yanagitani@gmail.com", to: "takanori.yanagitani@gmail.com", subject: "s2" },
  { date: "Sat, 09 Nov 2019 18:41:56 -0800", from: "takanori.yanagitani@gmail.com", to: "takanori.yanagitani@gmail.com", subject: "s1" },
]

const sample_mail2child  = mail         => React.createElement("div", {}, mail && mail.subject || "")
const sample_child2li    = (child, key) => React.createElement("li", { key, className: "list-group-item" }, child)
const sample_children2ul = children     => React.createElement("ul", { className: "list-group" }, children)

class SampleMailListViewer extends React.PureComponent {
  render(){
    const { mails } = this.props
    return ReactMailViewer.mails2list({
      mails,
      mail2child:  sample_mail2child,
      child2li:    sample_child2li,
      children2ul: sample_children2ul,
    })
  }
}

ReactDOM.render(
  React.createElement(SampleMailListViewer, { mails: sample_mails }),
  document.getElementById("root")
)
