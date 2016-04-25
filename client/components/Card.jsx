var React = require('react');
var ReactRouter = require('react-router');

var list = require('./lists/categories');

var Card = React.createClass({
  componentDidMount: function () {
    $('.ui.bottom.attached.progress').progress();
    $('.special.cards .image').dimmer({on: 'hover'});
  },

  render: function () {
    var progressStyle = {
      'height': '0.2rem'
    };

    var barStyle = {
      'height': '0.5rem',
      'borderRadius': '10px',
      'marginTop': '-2px'
    };

    var category = this.props.card.category || this.props.card.categories[0].shortName;

    // create a simple method here that pushes each unique category as a key in an object and assign it a color from a set array of colors

    return (
      <div className="card">
        <div className="content">
          <div className={`ui ${list[category] ? list[category].color : 'black'} left ribbon label`}>
            <i className={`${list[category] ? list[category].icon : ''} icon`}></i>
            {category}
          </div>
        </div>
        <div className="blurring dimmable image">
          <div className="ui dimmer">
            <div className="content">
              <div className="center">
                <div className="ui inverted button">Add Card</div>
              </div>
            </div>
          </div>
          <img className="ui image" src={this.props.card.image || `https://irs0.4sqi.net/img/general/300x300${this.props.venues[this.props.card.id].bestPhoto.suffix}`}/>
        </div>
        {this.props.children}
        <div className="ui extra content bottom attached segment">
          <div className="ui large transparent left icon input">
            <i className="comment icon"></i>
            <input type="text" placeholder="Add Comment..."/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Card;
