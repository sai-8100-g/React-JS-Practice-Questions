import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  OnAccelerate = () => {
    const {count} = this.state
    const speed =
      count === 200
        ? 200
        : this.setState(prevState => ({count: prevState.count + 10}))
    return speed
  }

  OnDecelerate = () => {
    const {count} = this.state
    const speed =
      count === 0
        ? 0
        : this.setState(prevState => ({count: prevState.count - 10}))
    return speed
  }

  render() {
    const {count} = this.state
    return (
      <div className="speedometer-container">
        <h1 className="speed-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          alt="speedometer"
        />
        <h1 className="speedometer-heading">
          Speed is <span>{count}</span>mph{' '}
        </h1>
        <p>Minimum is 0mph. Maximum is 200mph</p>
        <div>
          <button
            className="accelerate-btn"
            type="button"
            onClick={this.OnAccelerate}
          >
            Accelerate
          </button>
          <button
            className="deccelerate-btn"
            type="button"
            onClick={this.OnDecelerate}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer