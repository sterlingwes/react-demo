var React = require('react');
var TodoList = React.createFactory(require('./todolist.jsx'));

React.render(
  TodoList(window.APP_PROPS),
  document.getElementById('mount')
);