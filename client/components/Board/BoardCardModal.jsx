var React = require('react');
var ReactRouter = require('react-router');
var apiInfo = require('../../../config.js');
var FOURSQUARE_CLIENT_ID = apiInfo.foursquare.client_ID
var FOURSQUARE_CLIENT_SECRET = apiInfo.foursquare.client_secret


var BoardCardModal = React.createClass({

	getInitialState: function () {
    return {
      userTitle: '',
		  description: '',
		  venueId: 0
    };
  },

  getVenueId: function (){
	//When the user starts entering information into the search, there will be a drop down
	//displaying all related results.
	//When the user clicks on the venue, the id is stored.
		$.get('https://api.foursquare.com/v2/venues/+'+venueId+'?client_id='+FOURSQUARE_CLIENT_ID+'&client_secret='+FOURSQUARE_CLIENT_SECRET)
      .done(function (data) {
        console.log("WORKS!");
        callback(data);
      }).fail(function (err) {
        console.log('there was an error');
        callback(err);
    });
  },

	handleClick:function (e){
		// var newCard = this.state;
		// BoardCard.save(newCard, function (err, result) {
		// 	if(err) {
		// 		console.log(err);
		// 	} else {
		// 		this.props.searchById(this.state.venueId, function (err, result) {
		// 			if(err) {
		// 				console.log(err);
		// 			} else {
		// 				console.log('result of searchbyid', result);
		// 			}
		// 		});
		// 	}
		// });

	},

	render: function(){
		return (
			<div>
				{/* Collect information about new event
					Bind should give access of props to the parent for searching */}
				<form className="newBoardCard"  onClick={this.props.searchPlaces()}>

					<div className="userCardInfo">
						<input placeholder="Title" name="title" value={this.state.userTitle} onChange={this.handleInputChange}/>
						<input placeholder="Description" name="description" value={this.state.description} onChange={this.handleInputChange}/>
						<input placeholder="Date" name="date" value={this.state.date} onChange={this.handleInputChange}/>
						{/* Get information from App Search places, and save on state/db */}
					</div>



					<div className="fourSquareData">
						<Search/>
						 Search will then display all of the results into the bottom div */}

						<div className="searchResults">
						</div>

						<h3> {this.venueTitle} </h3>
						<h4> {this.catagory} </h4>
						<h4> {this.address} </h4>
					</div>

					<input placeholder="Date" name="date" value={this.state.date} onChange={this.handleInputChange}/>

					{/* Get information from App Search places, and save on state/db */}

					<input onSubmit={this.props.onSubmit.bind(null, this)} placeholder="Search"/>

					{/* This button will change the state of submitted to be true */}
					<button onClick={this.handleClick}> Save Event </button>
				</form>

			</div>
		)


	}
});

module.exports = BoardCardModal;
