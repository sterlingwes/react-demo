var React = require('react/addons');
var styles = require('./styles');
var TransitionGroup = React.addons.CSSTransitionGroup;

module.exports = React.createClass({
  
  displayName: 'TodoList',
  
  propTypes: {
    todos: React.PropTypes.array
  },
  
  getInitialState: function() {
    return {
      todos: this.props.todos || [],
      inputVal: ''
    };
  },
  
  handleInputKeyDown: function(e) {
    var inputVal = this.state.inputVal;
    if(inputVal && e.keyCode == 13) {
      this.setState({
        todos: this.state.todos.concat( [inputVal] ),
        inputVal: ''
      });
    }
  },
  
  handleInputChange: function() {
    this.setState({
      inputVal: this.refs.input.getDOMNode().value
    });
  },
  
  render: function() {
    
    var todos = this.state.todos.map(function(todo, i) {
      return <li key={i} style={styles.todoitem}>{ todo }</li>;
    });
    
    return (
      <div>
        <input
          ref="input"
          type="text"
          style={ styles.input }
          onKeyDown={ this.handleInputKeyDown }
          onChange={ this.handleInputChange }
          value={ this.state.inputVal }
          autoFocus
        />
        <TransitionGroup component="ul" transitionName="todoitem" style={styles.list}>
          { todos }
        </TransitionGroup>
      </div>
    );
  }
  
});