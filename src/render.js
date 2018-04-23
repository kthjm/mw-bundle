import * as React from 'react'
import * as ReactDOM from 'react-dom'
export default (Component, props, id = 'app') =>
  ReactDOM.render(
    <Component {...props} />,
    document.getElementById(id)
  )