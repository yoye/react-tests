/* Todo : list */

var TodoList = React.createClass({
  render: function() {
    var createItem = function(itemText) {
        return (
            <li>{itemText}</li>
        );
    };
    return (
        <ul>
            {this.props.items.map(createItem)}
        </ul>
    );
  }
});

var TodoAddWrapper = React.createClass({
  render: function() {
    return (
      <div className="todoAddWrapper">
        <h1>Ajouter une todo</h1>
        <TodoAddForm />
      </div>
    );
  }
});

var TodoAddForm = React.createClass({
    getInitialState: function() {
       return {items: []};
    },
    onSubmit: function(e) {
        e.preventDefault();
        var text = this.refs.text.getDOMNode().value;
        var nextItems = this.state.items.concat([text]);

        this.setState({items: nextItems});
        this.refs.text.getDOMNode().value = '';
    },
    render: function() {
        return (
            <div>
                <TodoList items={this.state.items} />
                <form onSubmit={this.onSubmit}>
                    <input ref="text" />
                    <button>
                        Ajouter un item
                    </button>
                </form>
            </div>
        );
    }
});

React.render(
    <TodoAddWrapper />,
    document.getElementById('todoadd')
);
