const {
  Container, Row, Col,
  Nav, NavItem, NavLink,
  TabContent, TabPane,
  ListGroup, ListGroupItem,
} = window.Reactstrap

class Sender extends React.PureComponent {
  render(){
    const { sender } = this.props
    const {
      name,
      addr,
    } = sender || {}
    return React.createElement("div", { title: addr || "" }, name || "")
  }
}

class ListSender extends React.PureComponent {
  render(){
    const { senders } = this.props
    const mapped = (senders || []).map((sender, key) => React.createElement(
      ListGroupItem, { key }, React.createElement(Sender, { sender })
    ))
    return React.createElement(ListGroup, {}, mapped)
  }
}

class ListYear extends React.PureComponent {
  render(){
    const {
      year,
      on_year,
    } = this.props
    const onClick = e => on_year(year)
    return React.createElement("div", { onClick }, year)
  }
}

class ListYears extends React.PureComponent {
  render(){
    const {
      years,
      on_year,
    } = this.props
    const mapped = (years || []).map((year, key) => React.createElement(
      ListGroupItem, { key }, React.createElement(ListYear, { year, on_year })
    ))
    return React.createElement(ListGroup, {}, mapped)
  }
}

class ListMonth extends React.PureComponent {
  render(){
    const {
      month,
      on_month,
    } = this.props
    const onClick = e => on_month(month)
    return React.createElement("div", { onClick }, month)
  }
}

class ListMonths extends React.PureComponent {
  render(){
    const {
      months,
      on_month,
    } = this.props
    const mapped = (months || []).map((month, key) => React.createElement(
      ListGroupItem, { key }, React.createElement(ListMonth, { month, on_month })
    ))
    return React.createElement(ListGroup, {}, mapped)
  }
}

class ListDay extends React.PureComponent {
  render(){
    const {
      day,
      on_day,
    } = this.props
    const onClick = e => on_day(day)
    return React.createElement("div", { onClick }, day)
  }
}

class ListDays extends React.PureComponent {
  render(){
    const {
      days,
      on_day,
    } = this.props
    const mapped = (days || []).map((day, key) => React.createElement(
      ListGroupItem, { key }, React.createElement(ListDay, { day, on_day })
    ))
    return React.createElement(ListGroup, {}, mapped)
  }
}

class ListMail extends React.PureComponent {
  render(){
    const {
      mail,
      on_mail,
    } = this.props
    const onClick = e => on_mail(mail)
    return React.createElement("div", { onClick }, mail)
  }
}

class ListMails extends React.PureComponent {
  render(){
    const {
      mails,
      on_mail,
    } = this.props
    const mapped = (mails || []).map((mail, key) => React.createElement(
      ListGroupItem, { key }, React.createElement(ListMail, { mail, on_mail })
    ))
    return React.createElement(ListGroup, {}, mapped)
  }
}

class ListDate extends React.PureComponent {
  constructor(props){
    super(props)
    this.state = {
      type: "years",
      year: null,
      month: null,
    }
  }

  render(){
    const {
      years,
      months,
      days,
      mails,
    } = this.props
    const { type } = this.state
    const on_year = year => {
      this.setState({
        year,
        type: "year",
      })
    }
    const on_month = month => {
      this.setState({
        month,
        type: "month",
      })
    }
    const on_day = day => {
      this.setState({
        day,
        type: "day",
      })
    }
    const on_mail = mail => {
      this.setState({
        mail,
        type: "mail",
      })
    }

    switch(type){
      default:      return React.createElement(ListYears,  { years,  on_year  })
      case "years": return React.createElement(ListYears,  { years,  on_year  })
      case "year":  return React.createElement(ListMonths, { months, on_month })
      case "month": return React.createElement(ListDays,   { days,   on_day   })
      case "day":   return React.createElement(ListMails,  { mails,  on_mail  })
    }
  }
}

const xrange = (lbi, ube) => {
  const g = function*(){ for(let i=lbi; i<ube; i++) yield i }
  return g()
}

const list = iterator => {
  const l = []
  for(const i of iterator) l.push(i)
  return l
}

class MailViewer extends React.PureComponent {
  render(){
    return React.createElement("div", {}, "mail view")
  }
}

class ReactMailViewer extends React.PureComponent {
  constructor(p){
    super(p)

    this.state = { activeTab: "1" }
  }
  render(){
    const { activeTab } = this.state

    const ocni  = i => this.setState({activeTab: i})
    const ocni0 = () => ocni("1")
    const ocni1 = () => ocni("2")

    const cn0 = "1" === activeTab ? "active" : ""
    const cn1 = "2" === activeTab ? "active" : ""

    const ni0_sender = React.createElement(NavLink, { className: cn0, onClick: ocni0 }, "Sender")
    const ni1_date   = React.createElement(NavLink, { className: cn1, onClick: ocni1 },   "Date")

    const senders = [
      { name: "Google", addr: "no-reply@accounts.google.com" },
      { name: "Github", addr: "noreply@github.com"           },
      { name: "Anyone", addr: "notifications@github.com"     },
    ]

    const years  = list(xrange(2010, 2020)).reverse()
    const months = list(xrange(1, 13)).reverse()
    const days   = list(xrange(1, 32)).reverse()
    const mails  = [
      {
        From: {
          "address": "no-reply@accounts.google.com\u003e",
          "display": "Google \u003c",
        },
        To: {
          "address": "takanori.yanagitani@gmail.com",
          "display": "Takanori Yanagitani",
        },
        Subject: "Security Notification",
        GetBody: () => React.createElement("div", {}, "hw this is body"),
      },
    ]

    return React.createElement("div", {}, [
      React.createElement(Nav, { key: "rmv0_nav", tabs: true }, [
        React.createElement(NavItem, { key: "ni0_sender" }, ni0_sender),
        React.createElement(NavItem, { key: "ni1_date"   }, ni1_date  ),
      ]),
      React.createElement(TabContent, { key: "rmv1_tab", activeTab: this.state.activeTab }, [
        React.createElement(TabPane, { key: "tp0_sender", tabId: "1" }, React.createElement(ListSender, { senders })),
        React.createElement(TabPane, { key: "tp1_date",   tabId: "2" }, React.createElement(ListDate,   { years, months, days, mails })),
      ]),
    ])
  }
}

export { ReactMailViewer }
