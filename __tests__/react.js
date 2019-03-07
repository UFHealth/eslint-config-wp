import React from 'react'
import ReactDOM from 'react-dom'

const now = moment()

const Button = (props) => {
  return (
    <a
      href={props.href}
      className="button"
      data-thing={now.format('MMM D, YYYY')}
    >{props.children}</a>
  )
}

ReactDOM.render(<Button href="#">Hello</Button>, document.getElementById('root'))
