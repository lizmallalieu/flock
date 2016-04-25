var React = require('react')
var api = require('../../../config')

var FOURSQUARE_CLIENT_ID = api.foursquare.client_ID
var FOURSQUARE_CLIENT_SECRET = api.foursquare.client_secret

/* ----------------- */
/*     Component     */
/* ----------------- */

var BoardModal = React.createClass({
  componentDidMount: function () {
    // $('#rangestart').calendar({
    //   type: 'date',
    //   endCalendar: $('#rangeend')
    // });
    //
    // $('#rangeend').calendar({
    //   type: 'date',
    //   startCalendar: $('#rangestart')
    // });

  },
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
    //   if(err) {
    //     console.log(err);
    //   } else {
    //     this.props.searchById(this.state.venueId, function (err, result) {
    //       if(err) {
    //         console.log(err);
    //       } else {
    //         console.log('result of searchbyid', result);
    //       }
    //     });
    //   }
    // });

  },


  render: function(){
    return (
      <div>
        <h1>Time/Date Picker</h1>
        <div className="ui form">
          <div className="two fields">
            <div className="field">
              <label>Start date</label>
              <div className="ui calendar" id="rangestart" data-value='date'>
                <div className="ui input left icon">
                  <i className="calendar icon"></i>
                  <input type="text" placeholder="Start"></input>
                </div>
              </div>
            </div>
            <div className="field">
              <label>End date</label>
              <div className="ui calendar" id="rangeend">
                <div className="ui input left icon">
                  <i className="calendar icon"></i>
                  <input type="text" placeholder="End"></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )



// https://jsbin.com/xupahuriyi/edit?html,js,output
// http://react-components.com/component/react-datepicker

  }
});



module.exports = BoardModal;
