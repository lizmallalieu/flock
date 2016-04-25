var React = require('react');
var ReactRouter = require('react-router');

import {Icon} from 'react-semantify'

var FeedCard = React.createClass({
  componentDidMount: function () {
    $('.special.cards .image').dimmer({on: 'hover'});
  },

  render: function () {
    var offsetJsx = <span style={{'marginLeft': '-5px'}}></span>;

    return (
      <div className="card">
        <div className="ui content attached segment">
          <div className="header">{this.props.card.name}</div>
          <div className="meta">
            <Icon className="tiny dollar"/>
            <Icon className="tiny dollar"/>
            <Icon className="tiny dollar"/>
            <Icon className="tiny dollar"/>
          </div>
          <div className="description">
            <Icon className="pin"/>
            {this.props.card.location.address}
          </div>
          <div className="description">
            <Icon className="call"/>
            {this.props.card.contact.formattedPhone}
          </div>
          <div className="description">
            {this.props.card.url || this.props.card.canonicalUrl ?
              <a
                href={`http://facebook.com/${this.props.card.contact.facebook}`}
                target="blank">
                <Icon className="world"/>
              </a>
            : offsetJsx}
            {this.props.card.contact.facebook ?
              <a
                href={`http://facebook.com/${this.props.card.contact.facebook}`}
                target="blank">
                <Icon className="facebook"/>
              </a>
            : offsetJsx}
            {this.props.card.contact.twitter ?
              <a
                href={`http://twitter.com/${this.props.card.contact.twitter}`}
                target="blank">
                <Icon className="twitter"/>
              </a>
            : ''}
          </div>
          {this.props.card.hasMenu ?
            <a
              className="ui black bottom right attached mini label"
              href={this.props.card.menu.externalUrl || this.props.card.menu.mobileUrl}
              style={{'borderBottomRightRadius': 0}}
              target="blank">
              Menu
            </a>
            : ''
          }
        </div>
        <div className="ui content attached segment">
          <span className="right floated">
            <Icon className="user"/>
            {this.props.card.stats.checkinsCount} visitors
          </span>
          <Icon className="idea"/>
          {this.props.card.stats.tipCount} tips
        </div>
      </div>
    )
  }
});

module.exports = FeedCard;
