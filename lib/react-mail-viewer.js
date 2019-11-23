(function(g, f){
  var is_common = "object" === typeof exports && "undefined" !== typeof module
  cf = function(){ module.exports    = f() }
  /* istanbul ignore next */
  gf = function(){ g.ReactMailViewer = f() }
  /* istanbul ignore next */
  return is_common ? cf() : gf()
})(this, function(lib){ return {

mails2list: function(o){
  var mails       = o && o.mails || []
  var mail2child  = o && o.mail2child
  var child2li    = o && o.child2li
  var children2ul = o && o.children2ul

  var children = mails.map(mail2child).map(child2li)
  return children2ul(children)
},

mail2dl: function(o){
  var mail = o && o.mail
  var date    = mail && mail.date || ""
  var from    = mail && mail.from || ""
  var to      = mail && mail.to     || ""
  var subject = mail && mail.subject || ""
  var content = mail && mail.content || {}
  var content2detail = o.content2detail
  var text2detail    = o.text2detail
  var date2detail    = o.date2detail
  var d2d = date2detail || text2detail
  var t2d = text2detail
  var c2d = content2detail
  return [
    d2d({term: "Date",    detail: date   }),
    t2d({term: "From",    detail: from   }),
    t2d({term: "To",      detail: to     }),
    t2d({term: "Subject", detail: subject}),
    c2d({term: "Content", detail: content})
  ]
},

version: 20191110.0903

}})
