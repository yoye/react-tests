var View = React.createClass({
  getInitialState : function(){
    // état initial
    return {
      checked : false
    }
  },
  getDefaultProps : function(){
    // si `this.props.label` n'est pas présent, ce sera `"?"`
    return {
      label : "?"
    }
  },
  toggle : function(){
    // on crée un nouvel état (les états de react sont immutable)
    // et on déclenche le render
    this.setState({
      checked : !this.state.checked
    })
  },
  render : function(){
    // petit addon pour se simplifier la vie
    var classes = React.addons.classSet({
      "list-item" : true,
      "list-item--valid" : this.state.checked
    })
    return (
      <div className={classes}>
        {/* notre binding tout simple */}
        <input checked={this.state.checked} type="checkbox" onChange={this.toggle} />
        {this.props.label}
      </div>
    )
  }
})

// on mount le component, et l'on passe le label
var view = React.render(<View label="helloworld" />, document.getElementById("id"))
// et hop
view.toggle()
