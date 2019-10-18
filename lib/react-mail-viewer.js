const {
  ListGroup,
  ListGroupItem,
} = window.Reactstrap;

class CIcon extends React.PureComponent {
  render(){
    const {
      children,
      className,
    } = this.props
    return React.createElement("span", { className }, children)
  }
}

class MailSummary extends React.PureComponent {
  render(){
    const {
      mail,
      from_alias,
      local,
    } = this.props
    const {
      year,
      mon,
      day,
      wd,
      hm,
    } = local || {}
    const {
      subject,
    } = mail || {}
    return React.createElement("div", { className: "react-mail-viewer-mail-summary" }, [
      React.createElement(CIcon,  { key: "ci", className: "cicon"   }, from_alias || ""),
      React.createElement("span", { key: "sb", className: "subject" }, subject    || ""),
      React.createElement("span", { key: "hm", className: "hm"      }, hm         || ""),
    ])
  }
}

class Mail extends React.PureComponent {
  render(){
    const { mail } = this.props
    const {
      from,
      date,
    } = mail || {}
    const { alias } = from || {}
    const fa = alias || (from && 0<from.length && from[0]) || ""
    const dt = new Date(Date.parse(date))
    return React.createElement(MailSummary, {
      mail,
      from_alias: fa,
      local: {
        year: "2019",
        mon:  "Oct",
        day:  "11",
        wd:   "Sat",
        hm:   dt.getHours() + ":" + dt.getMinutes(),
      },
    })
  }
}

class Mails extends React.PureComponent {
  render(){
    const { mails } = this.props
    const mapped = mails.map((mail, key) => React.createElement(
      ListGroupItem,
      { key },
      React.createElement(Mail, { mail })
    ))
    return React.createElement(ListGroup, {}, mapped)
  }
}

export {
  Mails,
}
