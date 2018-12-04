import React, { Component } from "react";
import Header from './components/Header/Header.js'
import Card from "./components/Card/Card";
import Footer from './components/Footer/Footer'
import Characters from "./characters.json";
import "./App.css";

let score = 0;
let topScore = 0;
let message = "Click on an NBA player to begin!";

class App extends Component {

  state = {
    Characters,
    score,
    topScore,
    message
  };

  setClicked = id => {

    const Characters = this.state.Characters;

    const clickedMatch = Characters.filter(match => match.id === id);

    if (clickedMatch[0].clicked) {
      score = 0;

      message = "Charles Barkley thinks you're terrible"

      for (let i = 0; i < Characters.length; i++) {
        Characters[i].clicked = false;
      }

      this.setState({ message });
      this.setState({ score });
      this.setState({ Characters });

    } else if (score < 11) {

      clickedMatch[0].clicked = true;

      score++;

      message = "Way to go! Keep going!";

      if (score > topScore) {
        topScore = score;
        this.setState({ topScore });
      }

      Characters.sort(function (a, b) { return 0.5 - Math.random() });

      this.setState({ Characters });
      this.setState({ score });
      this.setState({ message });

    } else {

      clickedMatch[0].clicked = true;

      score = 0;
      topScore = 12;

      message = "Shazaam! Your memory is an All-Star!";

      this.setState({ topScore });

      for (let i = 0; i < Characters.length; i++) {
        Characters[i].clicked = false;
      }

      Characters.sort(function (a, b) { return 0.5 - Math.random() });

      this.setState({ Characters });
      this.setState({ score });
      this.setState({ message });

    }
  };

  render() {
    return (
      <div>
        <Header message={this.state.message} score={this.state.score} topScore={this.state.topScore} />

        <div className='cardArea'>
          {this.state.Characters.map(char => (
            <Card
              setClicked={this.setClicked}
              id={char.id}
              key={char.id}
              name={char.name}
              image={char.image}
            />
          ))}
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;