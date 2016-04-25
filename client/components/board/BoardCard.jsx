var React = require('react');
var ReactRouter = require('react-router');
var apiInfo = require('../../../config');
var FOURSQUARE_CLIENT_ID = apiInfo.foursquare.client_ID
var FOURSQUARE_CLIENT_SECRET = apiInfo.foursquare.client_secret


var BoardCard = React.createClass({
  getInitialState: function(){

    //The boardType will determine if the card is a board-card, a user-card, or a feed-card.
    //Background image will come form the api if it is a board-card,
    //or be set as the first location if it is a user-card.
    return {
      cardType: null,
      backgroundImage: null,
      image: '',
      venueId: 0
    }
  },

  searchById: function(venueId, callback) {
    this.state.venueId = venueId;
    //ajax get request by venue id
    $.get('https://api.foursquare.com/v2/venues/'+venueId+'?client_id='+FOURSQUARE_CLIENT_ID+'&client_secret='+FOURSQUARE_CLIENT_SECRET+'&v=20130815')
      .done(function(data){
        console.log("WORKS!");
        callback(data);
      }).fail(function(err) {
        console.log('there was an error');
        callback(err);
      });
  },

  handleClick: function(){
  },

  render: function(){
    return (
      <div className="ui segments">
        <div className="ui segment">
        </div>
        <div className="ui horizontal segments">
          <div className="ui segment">
            <p>Top</p>
          </div>
          <div className="ui segment">
            <p>Middle</p>
          </div>
          <div className="ui segment">
            <p>Bottom</p>
          </div>
        </div>
        <div className="ui segment">
          <p>Bottom</p>
        </div>
      </div>
    )
  }
});

module.exports = BoardCard;
