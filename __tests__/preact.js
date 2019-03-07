import Preact from 'preact'

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

Preact.render(<Button href="#">Hello</Button>, document.getElementById('root'))
