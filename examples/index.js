import { Mails } from "../lib/react-mail-viewer.js"

class ReactMailViewer__Example1 extends React.PureComponent {
  render(){
    return React.createElement("div", {}, [
      React.createElement(Mails, {
        mails: [
          {
            from:    { alias: "G", name: "Google",              address: "no-reply@accounts.google.com"  },
            to:      { alias: "T", name: "Takanori Yanagitani", address: "takanori.yanagitani@gmail.com" },
            subject: "Security notification",
            body:    React.createElement("div", {}, "hw this is body"),
            date:    "Fri, 11 Oct 2019 19:53:06 +0000 (GMT)",
          },
          {
            from:    { alias: "A", name: "Apple",               address: "just_for_you@giftcards.apple.com" },
            to:      { alias: "T", name: "Takanori Yanagitani", address: "takanori.yanagitani@gmail.com"    },
            subject: "Gift card sent",
            body:    React.createElement("div", {}, "tib"),
            date:    "Wed, 18 Sep, 2019 22:30:00 +0000 (GMT)",
          },
        ],
      }),
    ])
  }
}

ReactDOM.render(React.createElement(ReactMailViewer__Example1), document.getElementById("react1"))
