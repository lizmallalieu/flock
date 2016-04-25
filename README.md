# Flock
---
## Summary
Flock is an app designed to help you plan events of any kind to birthday parties and bar crawls to wedding weekends and days exploring new cities. Simply create an itinerary for your event and share it with your flock.

## Stack/Technologies
MongoDB  
Express  
React  
Node  
Mongoose  
Semantic UI  
Webpack  
Mocha & Chai

## Getting Started
To download front-end dependencies, `bower install`  
To download back-end dependencies, `npm install`

## Front-End

## APIs
### Facebook Auth
- requires Facebook App ID
- gives the user an access token and allows us to authorize user

### Zip Code
- requires API key
- converts zip codes into city names

### Foursquare
- requires client ID & client secret to access
- Search endpoint - takes in a city and a search query and returns a collection of venues
- Venues endpoint - takes in a specific Foursquare venueId and returns more information about that venue

All API keys stored in config.js file in root directory (in .gitignore). Use APIKeysTemplate.js as a guide.

## React Components
App - main component that links together all other components  
Nav - navigation bar at the top of the page  
Search - searches Foursquare’s database of locations using a user-specified query  
Feed - shows suggested venues that user can add to an itinerary  
User - displays the user’s stats and event boards  
AuthModal - signup/login page using Facebook authentication  
Board - displays an event’s itinerary including user-generated text and location information  
BoardCard - an individual card displaying one location of an event  
BoardModal - allows user to create a new event card on an itinerary board  

## Back-End

## Flock API

The following outlines server-side requests that can be sent to the Flock API.

+ [Users](#users)
+ [Boards](#boards)
+ [Cards](#cards)
+ [Venues](#venues)

<a name="users"></a>
### Users

##### GET
`Endpoint: /api/users`  

`Example: /api/users?username=myusername`

Append a query to the URL path with a username parameter (accessed by `request.param('username')`). The response sends back a JSON object containing the user's ID, name, username, and an array of populated boards.

##### POST
`Endpoint: /api/users`  
```javascript
request.body = {
  authId: // Facebook ID
  name: // user name pulled from Facebook
  username: // user's name trimmed for whitespace and set to lowercase
}
```
The client triggers a POST request when users are signing up or signing in. A Facebook ID is sent in the request along with the user's name and username.

If the Facebook ID is not in the database, a new user profile is created and returned in the response. Otherwise, the user is simply retrieved from the database and sent back to the client.

The response sends back a JSON object containing the user's ID, name, username, and an array of populated boards (or empty array if new profile).

##### UPDATE
`Endpoint: /api/users`  
```javascript
request.body = {
  id: // User's unique Mongo-DB-generated ID
  [name]: // User's new name
  [username]: // User's new username
}
```

The client triggers an update to change a user's name or username. The two fields are optional and all other fields are not updatable. Existing fields (i.e., _id, authId, boards) are deleted from the request body to prevent accidental updating.

##### DELETE
`Endpoint: /api/users`  
```javascript
request.body = {
  id: // User's unique Mongo-DB-generated ID
}
```

A user's database ID can be sent in a DELETE request to remove that user's profile from the database. The response sends back a an object with information about how many documents were deleted from MongoDB.

<a name="boards"></a>
### Boards

##### GET
`Endpoint: /api/users?id=boardname`  

##### POST
Endpoint: `/api/users`
```javascript
request.body = {}
```

##### UPDATE

`Endpoint: /api/users`  

```javascript
request.body = {}
```

##### DELETE
`Endpoint: /api/users`  
```javascript
request.body = {
  id: // Board's unique Mongo-DB-generated ID
}
```

<a name="cards"></a>
### Cards

##### GET

`Endpoint: /api/users`  
`Example: /api/users?id=56d2bdcacffdf1b2b861ec5dS`  

##### POST
`Endpoint: /api/users`  
```javascript
request.body = {}
```

##### UPDATE
`Endpoint: /api/users`  

##### DELETE
`Endpoint: /api/users`  
```javascript
request.body = {
  id: // Card's unique Mongo-DB-generated ID
}
```

<a name="venues"></a>
### Venues

##### GET

`Endpoint: /api/users`  
`Example: /api/users?venueId=40a55d80f964a52020f31ee3`

A GET request submits a query to the database for any existing venue data. Client must provide Foursquare's unique venueId as query If the data does not exist, an HTTP request is sent to Foursquare and the returned data is parsed to create a new venue entry.

Foursquare sends back an object with a response property. Within response, Flock is interested in persisting the following information to limit the rate of API requests over time:

> **photoSuffix** : A string URL suffix for linking to an image of the venue.
>
> + `response.venue.bestPhoto.suffix`
>
> **rating** : A decimal rating derived from Foursquare's algorithim to determine a location's popularity (based on a ten-point scale).
> + `response.venue..ratng`
>
> **price** : A number ranging from 1 to 4, which corresponds to a price level. For food venues, 1 is < $10, 2 is $10-$20, 3 is $20-$30, and 4 is > $30 an entree.
> + `response.venue.price.tier`
>
> **tier** : String that represents the price level (i.e., "Cheap", "Moderate", "Pricey", etc.).
> + `response.venue.price.message`
>
> **hours** : An array of objects containing the venue's `days` of operation (i.e., "Mon-Fri") and corresponding business hours as a `renderedTime` (i.e., "10:00 AM–11:00 PM"). `Days` is an array to account for businesses that have different hours on different days. `Open` is also an array to account for businesses that operate at different times during the day (i.e., shops that close between lunch and dinner).
> + `response.venue.hours.timeframes`
> + `response.venue.hours.timeframes.days`
> + `response.venue.hours.timeframes.open[0].renderedTime`

Additionally, there are createdAt and updatedAt fields for keeping track of the last data refresh (see [UPDATE](#update-venue))

##### POST

There is no POST request for venues in the API as this task is managed in the GET request.

<a name="update-venue"></a>
##### UPDATE

`Endpoint: /api/users`  

```javascript
request.body = {
  venueId: '40a55d80f964a52020f31ee3'
}
```

A PUT request anticipates a Foursquare `venueId` in the request body. It triggers an HTTP request from the Foursquare API for venue data and updates existing information in the database. In compliance with Foursquare's API retention policy, any cached data must be refreshed every 30 days.

The `updatedAt` field helps keep track of when the information about a venue was last persisted. See Title IV of the [Foursquare API Platform Policy](https://foursquare.com/legal/api/platformpolicy).


##### DELETE

`Endpoint: /api/users`  

```javascript
request.body = {
  venueId: 40a55d80f964a52020f31ee3
}
```

DELETE requests remove persisted venue documents in the database. A venueId is required to identify the document marked for removal.

## File Structure

```
.
├── client
│   └── components
│   │   ├── App.jsx
│   │   ├── Nav.jsx
│   │   ├── Search.jsx
│   │   ├── board
│   │   │   ├── Board.jsx
│   │   │   ├── BoardCard.jsx
│   │   │   ├── BoardCardModal.jsx
│   │   ├── feed
│   │   │   ├── AuthModal.jsx
│   │   │   ├── Feed.jsx
│   │   │   ├── FeedCard.jsx
│   │   └── user
│   │   │   ├── User.jsx
│   │   │   ├── UserCard.jsx
│   │   │   ├── BoardModal.jsx
│   └── lib
│   └── config
│   │   ├── facebookAuth.js
│   │   ├── foursquareAPI.js
├── server
│   └── config.js
├── public
│   ├── app.js
│   ├── index.html
│   ├── style.css
│   ├── assets
│   └── lib
├── db
├── spec
│   ├── client
│   └── server
├── package.json
├── bower.json
├── .bowerrc
├── .gitignore
├── _PRESS_RELEASE.md
└── README.md
