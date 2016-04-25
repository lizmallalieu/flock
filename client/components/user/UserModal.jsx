import React from 'react'

import categories from '../lists/categories'
import friends from '../lists/friends'

import {Grid, Input, Icon, Item, Dropdown, Menu, Segment} from 'react-semantify'

/* ----------------- */
/*     Component     */
/* ----------------- */

class UserModal extends React.Component {
  render() {
    return (
      <div style={{'marginBottom': '15px'}}>
        <Grid className="field">
          <label className="three wide column">Permalink</label>
          <Input className="transparent left icon thirteen wide column">
            <input
              type="text"
              id={`${this.props.mode}Permalink`}
              name={`${this.props.mode}Permalink`}
              style={{'width': '100%'}}
              placeholder={`/${this.props.user.username}/your-board-title`}
              value={this.props.permalink}
              onChange={this.props.changeLink}
              onBlur={this.props.checkLink}
              required
            />
            <Icon className="linkify"/>
          </Input>
        </Grid>{/* Permalink Text */}

        <Grid className="field">
          <label className="three wide column">Category</label>
          <Dropdown
            id={`${this.props.mode}Selection`}
            className="selection thirteen wide column"
            init={true}>
            <input
              id={`${this.props.mode}Category`}
              name={`${this.props.mode}Category`}
              type="hidden"
            />
            <div className="default text">What kind of board is it?</div>
            <Icon className="dropdown"/>
            <Menu>
              {$.map(categories, (val, category) =>
                <Item
                  data-value={category}
                  data-text={category}
                  key={category}>
                  <Icon className={`${val.color} ${val.icon}`}/>
                  {category}
                </Item>
              )}
            </Menu>{/* Menu */}
          </Dropdown>{/* Category Dropdown */}
        </Grid>
      </div>
    )
  }
}

module.exports = UserModal
