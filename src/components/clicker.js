import React from 'react';

export default class CountAgain extends React.Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }
    // this.handleAdd = this.handleAdd.bind(this)
    // this.handleSub = this.handleSub.bind(this)
    this.handleCount = this.handleCount.bind(this)
  }
  handleCount(num) {
    this.setState({
      count: this.state.count + num
    })
  }

  render() {
    return(
      <div>
        <h3>Don't push me</h3>

        <div>
          Do as you please {this.state.count}
        </div>

        <button onClick={() => this.handleCount(1)}>Go up</button>
        <button onClick={() => this.handleCount(-1)}>Come down</button>
      </div>
    )
  }
}