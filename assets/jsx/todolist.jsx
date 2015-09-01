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
       return {items: [], text: ''};
    },
    onSubmit: function(e) {
        e.preventDefault();
        var nextItems = this.state.items.concat([this.state.text]);
        var nextText = '';
        this.setState({items: nextItems, text: nextText});
        console.log(nextItems);
    },
    onChange: function(e) {
        this.setState({text: e.target.value});
    },
    render: function() {
        return (
            <div>
                <TodoList items={this.state.items} />
                <form onSubmit={this.onSubmit}>
                    <input onChange={this.onChange} value={this.state.text} />
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