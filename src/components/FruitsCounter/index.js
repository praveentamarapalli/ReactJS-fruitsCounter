// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  eatMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="count">{mango}</span> mangoes{' '}
            <span className="count">{banana}</span> bananas
          </h1>
          <div className="img-container">
            <div className="sub-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango_image"
                className="img"
              />
              <button className="button" type="button" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>
            <div className="sub-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana_image"
                className="img"
              />
              <button className="button" type="button" onClick={this.eatBanana}>
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
