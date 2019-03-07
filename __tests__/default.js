const { render } = wp.element

const now = moment()
const { get } = lodash

const obj = {
  one: {
    two: {
      url: '#'
    }
  }
}

const Button = (props) => {
  return (
    <a
      href={get(obj, 'one.two.url')}
      className="button"
      data-thing={now.format('MMM D, YYYY')}
    >{props.children}</a>
  )
}

render(<Button href="#">Hello</Button>, document.getElementById('root'))
