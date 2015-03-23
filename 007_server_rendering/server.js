require('node-jsx').install()

var http = require('http'),
    fs = require('fs'),
    React = require('react'),
    DOM = React.DOM, body = DOM.body, div = DOM.div, script = DOM.script,
    App = React.createFactory(require('./src/todolist.jsx'))

http.createServer(function(req, res) {

  if (req.url == '/') {

    res.setHeader('Content-Type', 'text/html')

    var props = {
      todos: [
        'Item 0',
        'Item 1',
      ]
    }

    var html = React.renderToStaticMarkup(body(null,

      div({id: 'mount', dangerouslySetInnerHTML: {__html:
        React.renderToString(App(props))
      }}),

      script({dangerouslySetInnerHTML: {__html:
        'var APP_PROPS = ' + safeStringify(props) + ';'
      }}),

      script({src: '//fb.me/react-0.13.1.min.js'}),

      script({src: '/build/component.js'})
    ))
    
    html = '<html><head><title>007 Server Rendering</title>'
              + '<link rel="stylesheet" href="/base.css" /></head>'
              + html + '</html>';

    res.end(html)

  } else if (req.url == '/build/component.js') {

    res.setHeader('Content-Type', 'text/javascript')
    fs.readFile('./build/component.js', function(err,data) {
      res.end(data)
    })
    
  } else if (req.url == '/base.css') {
    
    res.setHeader('Content-Type', 'text/css')
    fs.readFile('./src/base.css', function(err,data) {
      res.end(data)
    })

  } else {
    res.statusCode = 404
    res.end()
  }

}).listen(3000, function(err) {
  if (err) throw err
  console.log('Listening on 3000...')
})

function safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}