import React from 'react'

import Card from '../Card'
import UserCard from './UserCard'
import Modal from '../Modal'
import UserModal from './UserModal'

import {Button, Icon, Image, Segment, Statistic} from 'react-semantify'

/* -------------- */
/*      User      */
/* -------------- */

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'userModal',
      permalink: '',
      pristine: true,
      linkIsValid: true,
      formIsValid: true,
      dimmer: '',
      newBoard: {
        uid: '56cdecf9c52f037b0e66709c',
        title: 'NO REALLY, One more time!',
        permalink: 'one-more-time-2',
        category: 'Travel',
        desc: 'This is a board about still being 25.',
        img: 'http://www.fashiongonerogue.com/wp-content/uploads/2015/10/Adele-25-Album-Cover-Artwork.jpg',
        secret: false,
        friends: ['56cdfa6d901de47718fba699','56cdf15bef62061312bfc144']
      }
    }
  }

  toggleModal = () => {
    if (this.state.dimmer) {
      this.setState({dimmer: ''})
    } else {
      this.setState({dimmer: 'active visible'})
    }
  }

  /* -------------------------- */
  /*      GET: /api/boards      */
  /* -------------------------- */

  checkLink = (evt) => {
    if (this.state.pristine || evt.target.id === 'userModalPermalink') {
      $.get('/api/boards', {
        uid: '56cdecf9c52f037b0e66709c', // this.props.user.id
        permalink: this.state.permalink
      })
      .done((board) => {
        if (!board) {
          this.setState({linkIsValid: true})
        } else {
          this.setState({linkIsValid: false})
        }
      }).fail((err) => {
        this.setState({linkIsValid: false})
        console.error('Could not get board data from server', err)
        throw new Error('Could not get board data from server', err)
      })
    }
  }

  generateLink = (str) => {
    return str.replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-*|-*$/g, '').toLowerCase()
  }

  suggestLink = (evt) => {
    if (this.state.pristine) {
      let link = this.generateLink(evt.target.value)
      this.setState({permalink: link})
    }
  }

  changeLink = (evt) => {
    var link = this.generateLink(evt.target.value)
    this.setState({permalink: link})
    this.setState({pristine: false})
  }

  /* --------------------------- */
  /*      POST: /api/boards      */
  /* --------------------------- */

  submitForm = (evt) => {
    if (this.state.formIsValid || this.state.linkIsValid) {
      console.log('ABOUT TO POST HONEY BOO!')
      $.post('/api/boards', this.state.newBoard)
      .done((user) => {
        console.log('Here we go we got one!', user)
        if (user) {
          this.props.setBoards(user.boards)
          console.log('And now our current BOARDS (props) state:', this.props.boards)
        }
      }).fail((err) => {
        console.error('Could not post board data to server', err)
        throw new Error('Could not post board data to server', err)
      })
    }
  }

  showModal = (evt) => {
    var $modal = $('#' + this.state.mode + 'Modal')
    var $form = $('#' + this.state.mode + 'Form')
    var $title = $('#' + this.state.mode + 'Title')
    var $desc = $('#' + this.state.mode + 'Description')
    var $pvt = $('#' + this.state.mode + 'Secret')
    var $flock = $('#' + this.state.mode + 'Flock')

    $modal.modal({
      observeChanges: true,
      onDeny: function (evt) {},
      onApprove: function (evt) {
        var title = $title.val()
        var description = $desc.val()
        var isPrivate = $pvt.val()
        var flock = $flock.val()
        $form.form('get value', 'userModalTitle')
      }
    })
    .modal('toggle')
  }

  render () {
    var centerStyle = {
      'display': '-webkit-flex',
      'display': 'flex',
      'WebkitFlexDirection': 'row',
      'flexDirection': 'row',
      'WebkitAlignItems': 'center',
      'alignItems': 'center',
      'WebkitJustifyContent': 'center',
      'justifyContent': 'center',
      'borderBottom': '2px solid #2185d0',
      'borderTop': 'none',
      'marginBottom': '20px'
    }

    var statStyle = { 'marginBottom': 0 }

    return (
      <section style={this.props.style}>
        <header>
          <Segment className="basic center aligned">
            <Image
              className="circular"
              src="http://semantic-ui.com/images/avatar2/small/matthew.png"
              style={{'margin': '0 auto'}}
            />
            <h1>{this.props.user.name}</h1>
            <Segment className="blue secondary statistics" style={centerStyle}>
              <Statistic style={statStyle}>
                <div className="value">4 <Icon className="small table"/></div>
                <div className="label">Boards</div>
              </Statistic>
              <Statistic style={statStyle}>
                <div className="value">18</div>
                <div className="label">Cards</div>
              </Statistic>
              <Statistic style={statStyle}>
                <div className="text value">Twenty<br/>Two</div>
                <div className="label">Followers</div>
              </Statistic>
              <Statistic style={statStyle}>
                <div className="value">
                  <Image
                    className="circular inline"
                    src="http://semantic-ui.com/images/avatar/small/joe.jpg"
                    data-pin-nopin="true"
                  /> 40</div>
                <div className="label">Friends</div>
              </Statistic>
            </Segment>
          </Segment>
        </header>
        <main>
          <div className="ui link four fluid stackable special cards">
            {this.props.boards.map((board, key) =>
              <Card card={board} key={key}>
                <UserCard
                  board={board}
                  venues={this.props.venues}
                  key={key}
                />
              </Card>
            )}
          </div>
          <Segment className="center aligned basic">
            <Button
              onClick={this.toggleModal.bind(this)}
              className="pink massive center circular icon">
              <Icon className="plus"/>
            </Button>
          </Segment>
        </main>
        <Modal
          mode={this.state.mode}
          dimmer={this.state.dimmer}
          user={this.props.user}
          header={'Create a board'}
          suggestLink={this.suggestLink}
          checkLink={this.checkLink}
          toggleModal={this.toggleModal}
          submitForm={this.submitForm}
          formIsValid={this.formIsValid}
        >
          <UserModal
            user={this.props.user}
            mode={this.state.mode}
            permalink={this.state.permalink}
            changeLink={this.changeLink}
            checkLink={this.checkLink}
          />
        </Modal>
      </section>
    )
  }
}

User.propTypes = {
  user: React.PropTypes.object.isRequired,
  boards: React.PropTypes.array.isRequired
}

module.exports = User
