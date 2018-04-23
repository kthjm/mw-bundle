import * as React from 'react'
import Atra from 'atra'

const a = Atra({
  ROOT: {
    style: {
      fontSize: '2em',
      color: 'red'
    }
  }
})

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { value: 'init' }
    this.inputOnChange = ({ target: { value }}) => this.setState({ value })
  }

  render() {
    const {
      state: { value },
      inputOnChange: onChange
    } = this

    return (
      <div {...a('ROOT')}>
        <p>{value || '.'}</p>
        <p>
          <input {...{ onChange }} />
        </p>
      </div>
    )
  }
}