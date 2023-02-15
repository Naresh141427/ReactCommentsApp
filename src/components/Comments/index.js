import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'

import CommentItem from '../CommentItem'

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
  state = {
    commentsList: [],
    inputText: '',
    comments: '',
    commentsCount: 0,
    time: '',
    isLiked: false,
  }

  onLiking = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  deleteComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(each => {
        if (each.id !== id) {
          return each
        }
        return ''
      }),
    }))
  }

  onAddingComments = event => {
    event.preventDefault()
    const {
      inputText,
      comments,
      commentsList,
      isLiked,
      commentsCount,
    } = this.state
    const count = commentsList.length + 1
    const newComment = {
      id: uuidv4(),
      inputText,
      comments,
      commentsCount: count,
      time: formatDistanceToNow(new Date()),
      isLiked,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      inputText: '',
      comments: '',
      time: '',
      commentsCount,
      isLiked,
    }))
  }

  onEnteringText = event => {
    this.setState({inputText: event.target.value})
  }

  onEnteringComments = event => {
    this.setState({comments: event.target.value})
  }

  render() {
    const {commentsList, inputText, comments, commentsCount} = this.state
    return (
      <div className="app-container">
        <div className="top-section">
          <div className="input-container">
            <h1 className="header">Comments</h1>
            <p className="description">Say something about 4.0 Technologies</p>
            <form className="comments-form" onSubmit={this.onAddingComments}>
              <input
                type="text"
                className="input-bar"
                placeholder="Your Name"
                onChange={this.onEnteringText}
                value={inputText}
              />
              <br />
              <textarea
                className="input-bar"
                rows="8"
                cols="80"
                placeholder="Your Comment"
                onChange={this.onEnteringComments}
                value={comments}
              />
              <button type="submit" className="btn">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comments-image"
          />
        </div>
        <hr className="horizontal-rule" />
        <div className="bottom-section">
          <div className="comment-container">
            <button type="button" className="add-button">
              {commentsCount}
            </button>
            <p className="comments-header">Comments</p>
          </div>
        </div>

        <ul className="comments-list-container">
          {commentsList
            ? commentsList.map(each => (
                <CommentItem
                  commentsDetails={each}
                  key={each.id}
                  classNameList={initialContainerBackgroundClassNames}
                  onLiking={this.onLiking}
                  deleteComment={this.deleteComment}
                />
              ))
            : ''}
        </ul>
      </div>
    )
  }
}

export default Comments
