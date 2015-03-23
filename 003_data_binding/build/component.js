var Form = React.createClass({displayName: "Form",
  
  getInitialState: function() {
    return { textVal: '' };
  },
  
  setText: function() {
    var currentValue = this.refs.textfield.getDOMNode().value;
    this.setState({ textVal: currentValue });
  },
  
  reversify: function() {
    this.setState({
      textVal: this.state.textVal.split('').reverse().join('')
    });
  },
  
  render: function() {
    var reverseBtn;
    if(this.state.textVal.length) {
      reverseBtn = React.createElement("button", {onClick:  this.reversify}, "Reversify!");
    }
    
    return (
      React.createElement("div", null, 
        React.createElement("input", {
          ref: "textfield", 
          type: "text", 
          value:  this.state.textVal, 
          onChange:  this.setText}
          ), 
        React.createElement("br", null), React.createElement("br", null), 
        "Current Value: ",  this.state.textVal, 
        React.createElement("br", null), React.createElement("br", null), 
         reverseBtn 
      )
    );
  }
  
});

React.render(React.createElement(Form, null), document.getElementById('mount'));