var styles = {
  input: {
    width: '100%',
    padding: '8px 0',
    fontSize: '1.5em',
    marginBottom: 10
  },
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  },
  todoitem: {
    listStyle: 'none',
    margin: 0,
    padding: 10,
    border: '1px solid #fff',
    backgroundColor: '#eee'
  }
};

var TransitionGroup = React.addons.CSSTransitionGroup;

var TodoList = React.createClass({
  
  getInitialState: function() {
    return {
      todos: [],
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

React.render(<TodoList/>, document.getElementById('mount'));