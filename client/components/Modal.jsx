import React from 'react'
import {Button, Divider, Dimmer, Modal, Header, Form, Grid, Menu, Icon} from 'react-semantify'

import categories from './lists/categories'
import friends from './lists/friends'

/* -------------- */
/*     Styles     */
/* -------------- */

const modalStyle = {
  'transform': 'translateY(-50%)',
  'display': 'block !important'
}

const toggleStyle = {
  'paddingLeft': '0'
}

/* ------------------ */
/*     BoardModal     */
/* ------------------ */

class BoardModal extends React.Component {
  componentDidMount() {
    $('#' + this.props.mode + 'Checkbox').checkbox()
    $('#' + this.props.mode + 'Dropdown').dropdown()
  }

  render() {
    return (
      <Dimmer className={`modals page transition ${this.props.dimmer}`}>
        <Modal id={`${this.props.mode}Modal`}
          className={`small long transition hidden ${this.props.dimmer}`}
          style={modalStyle}>

          <Header>{this.props.header}</Header>

          <div className="content">
            <div className="ui form" id={`${this.props.mode}Form`}>
              <Grid className="field">
                <label className="three wide column">Title</label>
                <input
                  id={`${this.props.mode}Title`}
                  name={`${this.props.mode}Title`}
                  className="thirteen wide column"
                  placeholder='Try "Weekend Adventure" or "New York in 48 Hours"'
                  onKeyUp={this.props.suggestLink}
                  onBlur={this.props.checkLink}
                  required
                />
              </Grid>{/* Title Text */}

              {this.props.children}

              <Grid className="field">
                <label className="three wide column">Description</label>
                <textarea id={`${this.props.mode}Description`} name={`${this.props.mode}Description`} rows="2" className="thirteen wide column" placeholder="What's your board about?"></textarea>
              </Grid>{/* Description Textarea */}

              <Divider/>

              <Grid className="field">
                <label className="three wide column">Secret</label>
                <div className="thirteen wide column field" style={toggleStyle}>
                  <div id={`${this.props.mode}Checkbox`} className="ui toggle checkbox">
                    <label>Only you and your flock will be able to see this board</label>
                    <input id={`${this.props.mode}Secret`} name={`${this.props.mode}Secret`} type="checkbox" tabIndex="0" className="hidden"/>
                  </div>
                </div>
              </Grid>{/* Secret Board Toggle */}

              <Grid className="field">
                <label className="three wide column">Flock</label>
                <div className="thirteen wide column field" style={toggleStyle}>
                  <div id={`${this.props.mode}Dropdown`} className="ui fluid multiple search normal selection dropdown">
                    <input
                      id={`${this.props.mode}Flock`}
                      name={`${this.props.mode}Flock`}
                      type="hidden"
                    />
                    <Icon className="dropdown"/>
                    <div className="default text">
                      Add to you friends to your flock
                    </div>
                    <Menu>
                      {friends.map((f, key) =>
                        <div className="item" data-value={f.username} key={key}>
                          <img
                            className="ui mini avatar image"
                            src={`http://semantic-ui.com/images/avatar/small/${f.avatar}.jpg`}
                          />
                          {f.name}
                        </div>
                      )}
                    </Menu>
                  </div>
                </div>
              </Grid>{/* Flock Dropdown */}
            </div>
          </div>{/* Modal Content */}
          <div className="actions">
            <Button
              id={`${this.props.mode}Cancel`}
              onClick={this.props.toggleModal}
              className="cancel">
              Cancel
            </Button>
            <Button
              id={`${this.props.mode}Create`}
              onClick={this.props.submitForm}
              className="green ok"
              disabled={this.props.formIsValid}>
              Create
            </Button>
          </div>{/* Modal Footer */}
        </Modal>
      </Dimmer>
    )
  }
}

module.exports = BoardModal
