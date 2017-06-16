import React from 'react'
import ReactDOM from 'react-dom'

function formatDate (date) {
  return date.toLocaleDateString()
}

function Avatar (props) {
  return <img className="Avatar" src={props.avatarUrl} alt={props.name} />
}

function UserInfo (props) {
  return (
    <div className="UserInfo">
      <Avatar avatarUrl={props.user.avatarUrl} name={props.user.name}/>
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  )
}

function CommentText (props) {
  return <div className="Comment-text">{props.text}</div>
}

function CommentDate (props) {
  return <div className="Comment-date">{formatDate(props.date)}</div>
}

function Comment (props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <CommentText text={props.text} />
      <CommentDate date={props.date} />
    </div>
  )
}

const comment = {
  date: new Date(),
  text: 'I really hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
}

ReactDOM.render(
  <Comment date={comment.date} text={comment.text} author={comment.author}/>,
  document.getElementById("root")
)
