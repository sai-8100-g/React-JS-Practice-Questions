import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoesCount: 0, bananasCount: 0}

  OnMangoesEat = () =>
    this.setState(prevState => ({
      mangoesCount: prevState.mangoesCount + 1,
    }))

  OnBananasEat = () =>
    this.setState(prevState => ({
      bananasCount: prevState.bananasCount + 1,
    }))

  render() {
    const {mangoesCount, bananasCount} = this.state
    return (
      <div className="main-container">
        <div className="content-container">
          <h1>
            Bob ate <span>{mangoesCount}</span> mangoes{' '}
            <span>{bananasCount}</span> bananas
          </h1>
          <div className="img-container">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                onClick={this.OnMangoesEat}
                className="mango"
                type="button"
              >
                Eat Mango
              </button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                onClick={this.OnBananasEat}
                className="banana"
                type="button"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
