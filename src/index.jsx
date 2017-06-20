import React from 'react'
import ReactDOM from 'react-dom'

class Clock extends React.Component{
  constructor(props) {
    super(props),
    this.state = {
      date: new Date()
    }
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (<h1>{this.state.date.toLocaleTimeString()}</h1>)
  }
  tick() {
      this.setState({date: new Date()})
  }

}


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
  text: 'I really hope you enjoy learning React - even on your Laptop!',
  author: {
    name: 'Hello Kitty Cat',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
}

ReactDOM.render(
  <div>
    <Comment date={comment.date} text={comment.text} author={comment.author}/>
    <Clock />
  </div>,
  document.getElementById("root")
)
