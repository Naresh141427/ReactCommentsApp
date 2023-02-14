import {Component} from 'react'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  onAddingComments = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div className="app-container">
        <h1 className="header">Comments</h1>
        <p className="description">Say something about 4.0 Technologies</p>
        <form className="comments-form" onSubmit={this.onAddingComments}>
          <input type="text" className="input-bar" placeholder="your name" />
          <br />
          <textarea className="input-bar" rows="8" cols="80"></textarea>
        </form>
      </div>
    )
  }
}

export default Comments
