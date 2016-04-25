var React = require('react');
var ReactRouter = require('react-router');
var ReactDOM = require('react-dom');
import { Link } from 'react-router';
var FacebookLogin = require('react-facebook-login');

var apiInfo = require('../../config');
var FACEBOOK_APP_ID = apiInfo.facebook.app_ID

var Search = require('./Search');

var Nav = React.createClass({
  responseFacebook: function (response) {
    var props = this.props; // retain binding of this.props passed down from <App/>
    console.log('response', response);
    var username = response.name.replace(/\s+/g, '').toLowerCase();;

    $.post('/api/users', {
      authId: response.id,
      name: response.name,
      username: username,
    })
    .done(function (user) {
      props.setUser({
        id: response._id,
        name: response.name,
        username: username,
        loggedIn: true
      })
    })
    .fail(function (err) {
      console.error('Could not authenticate.', err);
      throw new Error('Could not authenticate.', err)
    });
  },

  logout: function () {
    var props = this.props;

    FB.logout(function (response) {
      props.setUser({
        username: "Sign In",
        loggedIn: false
      })
      console.log("You\'ve been logged out!\n", response);
    });
  },

  render: function () {
    var loginButton =
      <FacebookLogin
        appId={FACEBOOK_APP_ID}
        autoLoad={false}
        callback={this.responseFacebook}
      />;

    var logoutButton = <a href="/" className="item" onClick={this.logout}>Logout</a>

    return (
      <nav>
        <div className="ui fixed inverted menu" style={{'height': '50px'}}>
          <Link to="/">Feed</Link>
          <Link to="/user">User</Link>
          <Link to="/user/board">Board</Link>
          <div className="ui container">
            <a href="#" className="header item">
              <img className="logo" src="assets/images/logo.svg"></img>
            </a>
            <div className="item" style={{'width': '60%'}}>
              <Search
                searchMethod={this.props.searchPlace}
                locations={this.props.locations}
              />
            </div>
            <div id="userMenu" className="ui simple right dropdown item">
              {this.props.user.username}<i className="dropdown icon"></i>
              <div className="menu">
                <a className="item" href="#"><i className="grid layout icon"></i>My Boards</a>
                <div className="divider"></div>
                <div className="item">
                  <i className="user icon"></i>
                    Account
                  <i className="dropdown icon"></i>
                  <div className="menu">
                    <a className="item" href="#"><i className="wrench icon"></i>Settings</a>
                    <a className="item" href="#"><i className="phone icon"></i>Support</a>
                  </div>
                </div>
                <div className="divider"></div>
                  {this.props.user.loggedIn ? logoutButton : loginButton}
              </div>
                <div className="divider"></div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = Nav;
