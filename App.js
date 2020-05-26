class App extends React.Component {
  constructor(props) {
    super(props);
    this.apiUrl = "https://games-app-siit.herokuapp.com";
    this.state = {
      games: [],
      isLoaded: false,
    }
  }

  componentDidMount() {

    fetch(`${this.apiUrl}` + "/games")
      .then(res => res.json())
      .then(json => {
        return this.setState({
          games: json,
          isLoaded: true,
        })
      }).catch((err) => {
        console.log("Error!");
      });

  }

  

  render() {

    if (!this.state.isLoaded) {
      return (
        <p>Loading .....</p>
      )
    } else {
      const gamesList = this.state.games.map(game => {
        return (
          <Game
            key={game._id}
            id={game._id}
            title={game.title}
            description={game.description}
            imageUrl={game.imageUrl}
          />
        )
      })

      return (
        <div>
          {gamesList}
        </div>
      )
    }
  }
}

const appDOM = document.getElementById('app');
ReactDOM.render(<App />, appDOM)
