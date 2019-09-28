const {
  Container, Row, Col,
  Nav, NavItem, NavLink,
  TabContent, TabPane,
} = window.Reactstrap

class Sender extends React.PureComponent {
  render(){
    const { sender } = this.props
    const {
      name,
      addr,
    } = sender || {}
    return React.createElement(Col, { xs: 12 }, React.createElement(
      "div",
      { title: addr },
      name || ""
    ))
  }
}

class ListSender extends React.PureComponent {
  render(){
    const { senders } = this.props
    const mapped = (senders || []).map((sender, key) => React.createElement(
      Row, { key }, React.createElement(Sender, { sender })
    ))
    return React.createElement(Container, {}, mapped)
  }
}

class ListDate extends React.PureComponent {
  render(){
    return React.createElement("div", {}, "list by date")
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

    return React.createElement("div", {}, [
      React.createElement(Nav, { key: "rmv0_nav", tabs: true }, [
        React.createElement(NavItem, { key: "ni0_sender" }, ni0_sender),
        React.createElement(NavItem, { key: "ni1_date"   }, ni1_date  ),
      ]),
      React.createElement(TabContent, { key: "rmv1_tab", activeTab: this.state.activeTab }, [
        React.createElement(TabPane, { key: "tp0_sender", tabId: "1" }, React.createElement(ListSender, { senders })),
        React.createElement(TabPane, { key: "tp1_date",   tabId: "2" }, React.createElement(ListDate  )),
      ]),
    ])
  }
}

export { ReactMailViewer }
