var Cowbells = React.createClass({
  
  propTypes: {
    number: React.PropTypes.number
  },
  
  render: function() {
    var cowbells = [];
    for(i=0; i<=this.props.number; i++) {
      cowbells.push(<img key={i} src="http://upload.wikimedia.org/wikipedia/commons/4/46/Koebel.jpg" width="100" />);
    }
    
    return <div>{ cowbells }</div>;
  }
  
});

var Component = React.createClass({
  
  getInitialState: function() {
    return { number: 0 };
  },
  
  increment: function() {
    this.setState({
      // number: this.state.number + 1
      number: '1'
    });
  },
  
  render: function() {
    
    return (
      <div>
        <button onClick={ this.increment }>More Cowbell</button>
        <Cowbells number={ this.state.number } />
      </div>
    );
  }
  
});

React.render(
  <Component />, document.getElementById('mount')
);