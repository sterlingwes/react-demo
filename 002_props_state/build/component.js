var Cowbells = React.createClass({displayName: "Cowbells",
  
  render: function() {
    var cowbells = [];
    for(i=0; i<=this.props.number; i++) {
      cowbells.push(React.createElement("img", {key: i, src: "http://upload.wikimedia.org/wikipedia/commons/4/46/Koebel.jpg", width: "100"}));
    }
    
    return React.createElement("div", null,  cowbells );
  }
  
});

var Component = React.createClass({displayName: "Component",
  
  getInitialState: function() {
    return { number: 0 };
  },
  
  increment: function() {
    this.setState({
      number: this.state.number + 1
    });
  },
  
  render: function() {
    
    return (
      React.createElement("div", null, 
        React.createElement("button", {onClick:  this.increment}, "More Cowbell"), 
        React.createElement(Cowbells, {number:  this.state.number})
      )
    );
  }
  
});

React.render(
  React.createElement(Component, null), document.getElementById('mount')
);