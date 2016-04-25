var React = require('react');
var ReactRouter = require('react-router');

var UserCard = React.createClass({
  componentDidMount: function () {
    $('.ui.mini.rounded.image')
      .popup({
        inline   : true,
        hoverable: true,
        position : 'bottom left',
        delay: { show: 50, hide: 0 }
      });
  },

  componentWillReceiveProps: function () {
    // call populate Venues from server API
  },

  render: function () {
    var featStyle = {
      'marginRight': '5px',
      'display': 'inline-block'
    };

    var featContainStyle = {
      'overflow': 'hidden',
      'overflowX': 'scroll',
      'height': '60px'
    };

    return (
      <div className="ui content segment">
        <div className="header">{this.props.board.title}</div>
        <div className="meta">
          First event begins in 48 min
        </div>
        <div className="ui content segment">
          <i className="user icon"></i>
          {this.props.board.description}
        </div>
        <div className="ui content">
          <div className="description">Cards</div>
          <div style={featContainStyle}>
            <div style={{
              'marginTop': '10px',
              'maxHeight': '45px',
              'width': this.props.board.cards.length * 40 + 'px'
            }}>
              {this.props.board.cards.map((venueId, key) =>
                <a key={key} target="blank"
                  href={this.props.venues[venueId].url || this.props.venues[venueId].canonicalUrl} >
                  <img
                    className="ui mini rounded image"
                    data-content={this.props.venues[venueId].name}
                    data-variation="wide mini"
                    src={`https://irs0.4sqi.net/img/general/300x300${this.props.venues[venueId].bestPhoto.suffix}`} style={featStyle} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = UserCard;
