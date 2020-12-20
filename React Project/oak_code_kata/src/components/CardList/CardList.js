import React from 'react';

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
    this.cards = this.cards.bind(this);
  }

  cards() {
    let listOfCard = [];
    for (let article in this.state) {
      listOfCard.push(
        <CardItem src={this.state[article].src} header={this.state[article].header} sub={this.state[article].sub}/>
      );
    }
    return listOfCard;
  }

  render() {
    return (
      <div className="row row-cols-1 row-cols-md-3">
        {this.cards()}
      </div>
    )
  }
}

class CardItem extends React.Component {

  render() {
    return (
      <div className="col mb-4">
        <div className='card' style={{ width: '26rem' }}>
          <img src={this.props.src} className="card-img-top" alt={this.props} />
          <div className="card-body">
            <h5>{this.props.header}</h5>
            <p>{this.props.sub}</p>
            <a href="#" className="btn btn-primary">Learn more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default CardList;