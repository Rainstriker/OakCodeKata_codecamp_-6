import React from 'react'
import ReactDOM from 'react-dom'

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "How To: React Form": {
        src: "https://dummyimage.com/600x300/000000/fff.png",
        header: "How To Make Interactive ReactJS Form",
        sub: "Let's write some interactive form with React"
      },
      "Babel Intro": {
        src: "https://dummyimage.com/600x300/000000/fff.png",
        header: "Babelify your JavaScript code",
        sub: "Babel make JavaScript code browser-compatible"
      },
      "JavaScript Basics": {
        src: "https://dummyimage.com/600x300/000000/fff.png",
        header: "JavaScript Basics Before You Learn React",
        sub: "Learn the prerequisites of learning React fast"
      }
    };
  }

  cards() {
    let listOfCard = [];
    for (let article in this.state) {
      listOfCard.push(
        <CardItem cardComponent={this.state[article]}/>
      );
    }
  }
  
  render() {
    return (
      <div>
        {listOfCard}
      </div>
    )
  }
}

class CardItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <img src={this.props.src}/>
        <h1>{this.props.header}</h1>
        <p>{this.props.sub}</p>
        <button>Learn more</button>
      </div>
    )
  }
}

ReactDOM.render(<CardList />, document.getElementById('app'));