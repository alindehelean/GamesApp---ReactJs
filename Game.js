class Game extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      // console.log(this.props);
      return (
        <div id={this.props.id}>
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
          <img src ={this.props.imageUrl}/>
          <button>Delete Game</button>
        </div>
      )
    }
  }