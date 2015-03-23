var ReversibleMixin = {
  reversify: function() {
    this.setState({
      textVal: this.state.textVal.split('').reverse().join('')
    });
  }
};

var Form = React.createClass({
  
  mixins: [ReversibleMixin],
  
  getInitialState: function() {
    return { textVal: '' };
  },
  
  setText: function() {
    var currentValue = this.refs.textfield.getDOMNode().value;
    this.setState({ textVal: currentValue });
  },
  
  render: function() {
    var reverseBtn;
    if(this.state.textVal.length) {
      reverseBtn = <button onClick={ this.reversify }>Reversify!</button>;
    }
    
    return (
      <div>
        <input
          ref="textfield"
          type="text"
          value={ this.state.textVal }
          onChange={ this.setText }
          />
        <br/><br/>
        Current Value: { this.state.textVal }
        <br/><br/>
        { reverseBtn }
      </div>
    );
  }
  
});

React.render(<Form/>, document.getElementById('mount'));