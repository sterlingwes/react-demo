var mountNode = document.getElementById('mount');

var MyComponent = React.createClass({displayName: "MyComponent",
  
  render: function() {
    
    var paragraphs = [
      React.createElement("p", null, "This is a component written using JSX."),
      React.createElement("p", null, "JSX is a JavaScript syntax extension that looks similar to XML. You can use a simple JSX syntactic transform with React."),
      React.createElement("p", null, "You don't have to use JSX with React. You can just use plain JS. However, using JSX is recommended because it is a concise and familiar syntax for defining tree structures with attributes.")
    ];
    
    return (
      React.createElement("div", null, 
        React.createElement("h1", null, "Hello!"), 
         paragraphs 
      )
    );
  }
});

React.render(
  React.createElement(MyComponent, null),
  mountNode
);