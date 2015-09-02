/* Wrapper */

var TchatWrapper = React.createClass({
    handleTchatSubmit: function(message) {
        console.log(message);
        var messages = this.state.data;
        var newMessages = messages.concat([message]);
        this.setState({data: newMessages});
    },

    render: function() {
        return (
            <div className="tchatWrapper">
                <h1>Tchat !</h1>
                <TchatList data={this.props.data} />
                <h2>Ajouter un message</h2>
                <TchatForm onTchatSubmit={this.handleTchatSubmit} />
            </div>
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

/* Form */

var TchatForm = React.createClass({
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
                <input className="tchatForm" ref="message" />
            </form>
        );
    }
});

React.render(
  <TchatWrapper data={listMessages} />,
  document.getElementById('tchat')
);