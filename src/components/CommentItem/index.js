import './index.css'

const CommentItem = props => {
  const {commentsDetails, classNameList, onLiking, deleteComment} = props
  const {
    id,
    inputText,
    comments,
    time,
    commentsCount,
    isLiked,
  } = commentsDetails

  const onDoingLike = () => {
    onLiking(id)
  }

  const onDeleting = () => {
    deleteComment(id)
  }

  const imageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="comment-item">
      <div className="top-container">
        <div className={`name-container ${classNameList[commentsCount - 1]}`}>
          {inputText[0]}
        </div>
        <div className="name-time-container">
          <div className="container">
            <p className="name">{inputText}</p>
            <p className="time">{time}</p>
          </div>
          <p className="description">{comments}</p>
        </div>
      </div>
      <div className="bottom-container">
        <button type="button" className="like-button">
          <img
            src={imageUrl}
            className="like-image"
            alt="like"
            onClick={onDoingLike}
          />
        </button>
        <button type="button" className="like-button" data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="like-image"
            alt="delete"
            onClick={onDeleting}
          />
        </button>
      </div>
      <hr className="hr-rule" />
    </li>
  )
}

export default CommentItem
