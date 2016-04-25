var React = require('react');
var ReactRouter = require('react-router');

var Card = require('../Card');
var FeedCard = require('./FeedCard');

var Feed = React.createClass({
  render: function () {
    return (
      <main className="ui link four fluid stackable special cards" style={this.props.style}>
        {this.props.cards.map((card, key) =>
          <Card card={card} venues={this.props.venues} key={key}>
            <FeedCard card={card} venues={this.props.venues} key={key}/>
          </Card>
        )}
      </main>
    )
  }
});

module.exports = Feed;
