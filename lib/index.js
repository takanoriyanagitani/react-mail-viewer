const {
  Container, Row, Col,
  Nav, NavItem, NavLink,
  TabContent, TabPane,
} = window.Reactstrap

class ListSender extends React.PureComponent {
  render(){
    return React.createElement("div", {}, "list by sender")
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
    return React.createElement("div", {}, [
      React.createElement(Nav, { key: "rmv0_nav", tabs: true }, [
        React.createElement(NavItem, { key: "ni0_sender" }, React.createElement(NavLink, { href: "#", active: true }, "Sender")),
        React.createElement(NavItem, { key: "ni1_date"   }, React.createElement(NavLink, { href: "#",              },   "Date")),
      ]),
      React.createElement(TabContent, { key: "rmv1_tab", activeTab }, [
        React.createElement(TabPane, { key: "tp0_sender", tabId: "1" }, ListSender),
        React.createElement(TabPane, { key: "tp1_date",   tabId: "2" }, ListDate),
      ]),
    ])
  }
}

export { ReactMailViewer }
