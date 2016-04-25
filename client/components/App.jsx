import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory, hashHistory, IndexRoute} from 'react-router'

import mockState from './lists/mockState'
import apiInfo from '../../config'
window.FOURSQUARE_CLIENT_ID = apiInfo.foursquare.client_ID
window.FOURSQUARE_CLIENT_SECRET = apiInfo.foursquare.client_secret
window.ZIPCODEAPI_KEY = apiInfo.zipcode.zipcodeapi_key

/*--------------------*/
/*     COMPONENTS     */
/*--------------------*/

import Nav from './Nav'
import Search from './Search'
import Feed from './feed/Feed'
import Card from './Card'

import User from './user/User'
import AuthModal from './feed/AuthModal'

import Board from './board/Board'
import BoardCard from './board/BoardCard'
import BoardModal from './board/BoardModal'

/*-------------*/
/*     App     */
/*-------------*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = mockState
  }

  setUser = (user) => {
    this.setState({user: user})
  }

  setBoards = (boards) => {
    this.setState({boards: boards})
  }

  searchPlace = (query, callback) => {
    const url = 'https://api.foursquare.com/v2/venues/search';
    const params = {
      client_id: FOURSQUARE_CLIENT_ID,
      client_secret: FOURSQUARE_CLIENT_SECRET,
      v: 20130815,
      near: this.state.location.zipcode,
      query: query
    }

    $.get(url, params)
    .done(function(data) {
      callback(data)
      }).fail(function(err) {
      callback(err)
    })
  }

  searchVenue = (venueId, callback) => {
    const url = `https://api.foursquare.com/v2/venues/${venueId}`
    const params = {
      client_id: FOURSQUARE_CLIENT_ID,
      client_secret: FOURSQUARE_CLIENT_SECRET,
      v: 20160225
    }

    $.get(url, params)
    .done(function(data) {
      console.log("GOT VENUE DATA!")
      callback(data)
      }).fail(function(err) {
      console.log('there was an error')
      callback(err)
    })
  }

  explorePlace = (query) => {
    // Foursquare Explore API call to return inspiration data
  }

  render() {
    const containStyle = {
      'marginTop': '50px',
      'padding': '20px 30px'
    }

    var children = React.cloneElement(this.props.children, {
      status: this.state,
      setUser: this.setUser,
      setBoards: this.setBoards,
      style: containStyle
    })

    return (
      <div>
        <Nav
          searchPlace={this.searchPlace}
          explorePlace={this.explorePlace}
          locations={this.state.locations}
          setUser={this.setUser.bind(this)}
          user={this.state.user}
        />
        {children}
      </div>
    )
  }
}

/*------------------*/
/*     HANDLERS     */
/*------------------*/

class BoardHandler extends React.Component {
  render() {
    return (
      <Board
        board={this.props.status.boards[2]}
        venues={this.props.status.venues}
        style={this.props.style}
      />
    )
  }
}

class UserHandler extends React.Component {
  render() {
    return (
      <User
        user={this.props.status.user}
        boards={this.props.status.boards}
        venues={this.props.status.venues}
        setUser={this.props.setUser}
        setBoards={this.props.setBoards}
        style={this.props.style}
      />
    )
  }
}

class FeedHandler extends React.Component {
  render() {
    return (
      <Feed
        cards={this.props.status.cards}
        venues={this.props.status.venues}
        style={this.props.style}
      />
    )
  }
}

/*----------------*/
/*     ROUTER     */
/*----------------*/

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={FeedHandler}/>
      <Route path='/*/*' component={BoardHandler}/>
      <Route path='/*' component={UserHandler}/>
    </Route>
  </Router>,
  document.getElementById('app')
)
