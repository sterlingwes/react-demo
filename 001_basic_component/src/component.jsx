var mountNode = document.getElementById('mount');

var MyComponent = React.createClass({
  
  render: function() {
    
    var paragraphs = [
      <p>This is a component written using JSX.</p>,
      <p>JSX is a JavaScript syntax extension that looks similar to XML. You can use a simple JSX syntactic transform with React.</p>,
      <p>You don't have to use JSX with React. You can just use plain JS. However, using JSX is recommended because it is a concise and familiar syntax for defining tree structures with attributes.</p>
    ];
    
    return (
      <div>
        <h1>Hello!</h1>
        { paragraphs }
      </div>
    );
  }
});

React.render(
  <MyComponent />,
  mountNode
);