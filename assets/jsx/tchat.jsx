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
        <h2 className="messagePseudo">
          {this.props.pseudo}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

React.render(
  <TchatWrapper data={listMessages} />,
  document.getElementById('tchat')
);