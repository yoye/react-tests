/* Wrapper */

var TchatWrapper = React.createClass({
  render: function() {
    return (
      <div className="tchatWrapper">
        <h1>Tchat !</h1>
        <TchatList data={this.props.data} />
      </div>
    );
  }
});

/* Add Message */

var TchatAdd = React.createClass({
    handleTchatSubmit: function(message) {
        console.log(message);
    },
    render: function() {
        return (
            <div className="tchatAdd">
                <h2>Ajouter un message</h2>
                <TchatInput onTchatSubmit={this.handleTchatSubmit} />
            </div>
        );
    }
});

var TchatInput = React.createClass({
    getInitialState: function() {
        return {
            pseudo: [],
            text: []
        };
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var input = this.refs.message.getDOMNode();
        var inputValue = input.value;
        this.props.onTchatSubmit({
            pseudo: ["Cyril"],
            text: [inputValue]
        });
        input.value= "";
    },

    render: function() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input className="tchatInput" ref="message" />
            </form>
        );
    }
});


/* List messages */

var TchatList = React.createClass({
    render: function() {
        var tchatNodes = this.props.data.map(function (message) {
            return (
                <TchatMessage pseudo={message.pseudo}>
                  {message.text}
                </TchatMessage>
            );
        });
        return (
            <div className="tchatList">
                {tchatNodes}
            </div>
        );
    }
});

var TchatMessage = React.createClass({
  render: function() {
    return (
      <div className="message">
        <h3 className="messagePseudo">
          {this.props.pseudo}
        </h3>
        {this.props.children}
      </div>
    );
  }
});

React.render(
  <TchatAdd />,
  document.getElementById('tchatAdd')
);
React.render(
  <TchatWrapper data={listMessages} />,
  document.getElementById('tchat')
);