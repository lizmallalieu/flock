var React = require('react');
var ReactRouter = require('react-router');
var apiInfo = require('../../config.js');
var ZIPCODEAPI_KEY = apiInfo.zipcode.zipcodeapi_key;


var Search = React.createClass({
  getInitialState: function () {
    return {
      value: ''
    };
  },

  componentDidMount: function () {
    $('#zipcodeDropdown').dropdown({
      apiSettings: {
        headers: {'Access-Control-Allow-Origin': '*'},
        onResponse: function(response, settings) {
          console.log('=====================>', settings);
          console.log('GOT A RESPONSE!', JSON.stringify(response));
        },
        beforeXHR: function (xhr, settings) {
          xhr.setRequestHeader ('Access-Control-Allow-Origin', '*');
          xhr.setRequestHeader ('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
          xhr.setRequestHeader ('Access-Control-Max-Age', 10);
          xhr.setRequestHeader ('Content-Type', 'application/json');
          xhr.setRequestHeader ('Access-Control-Allow-Headers', 'Content-Type, Accept');
          console.log('before XHR:', xhr);
          console.log('before XHR settings:', settings);
          return xhr;
        },
        successTest: function (response) {
          console.log('SUCCESS TEST!!:', response);
        },
        url: 'http://www.zipcodeapi.com/rest/{key}/info.json/{query}/degrees',
        dataType: 'json',
        contentType: 'application/json',
        throttle: 250,
        urlData: {
          key: ZIPCODEAPI_KEY
        },
        onResults: function (response, settings) {
          console.log("=======>ON RESULTS!!!!!!!!!!!!!!!!!!!!!!!! this", this);
          console.log("response", response);
          return response;
        },
        onSuccess: function (response, element, xhr) {
          console.log('SOMETHING THOOOO response', response);
          console.log('SOMETHING THOOOO element', element);
          console.log('SOMETHING THOOOO xhr', xhr);
        }
      },
      delay: { search: 1000 },
      fields: {
        name : 'city',
        value : 'state'
      },
      onChange: function (text, value) {
        console.log('Look I made it!');
      }
    });
    console.log('init!');
  },

  // handles when text is typed into search box
  handleInputChange: function (evt) {
    this.setState({
      value: evt.target.value
    });
  },

  // handles when user hits 'Enter' key while in search box
  handleSubmit: function (evt) {
    evt.preventDefault();
    var query = this.state.value;
    this.props.searchMethod(query, function(result) {
      if(!result) {
        throw new Error('Could not find any results for ' + query);
      } else {
        console.log('inside handleSubmit in Search component');
        console.log(result.response.venues);
      }
    });
  },

  render: function () {
    return (
      <div className="ui right action search left icon input">
        <form onSubmit={this.handleSubmit} className="ui right action search left icon input" style={{'width': '100%'}}>
          <i className="search icon"></i>
          <input onChange={this.handleInputChange} type="text" placeholder="Search"/>
        </form>
        <div id="zipcodeDropdown" className="ui labeled icon top right pointing dropdown button">
          <i className="marker icon"></i>
          <span id="locationFilter" className="text">San Francisco</span>
          <div className="menu">
            <div className="ui search left icon input">
              <i className="search icon"></i>
              <input id="locationSearch" type="text" name="search" placeholder="Search postal code..."/>
            </div>
            <div className="divider"></div>
            <div className="header">
              <i className="tags icon"></i>
              Recent Locations
            </div>
            {this.props.locations.map((loc, key) =>
              <div className="item" data-text={loc} key={key}>{loc}</div>
            )}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Search;
