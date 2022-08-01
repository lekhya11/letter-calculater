import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    count: 0,
  }

  onChangeInput = event => {
    if (event === '') {
      this.setState({count: 0})
    } else {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <div className="calculate-con">
            <h1 className="heading"> Calculate the Letters you enter</h1>
            <label htmlFor="inbox" className="label">
              enter the phrase
            </label>
            <input
              type="text"
              className="input-value"
              id="inbox"
              placeholder="Enter the Phrase"
              onChange={this.onChangeInput}
            />
            <button type="button" className="letters-button">
              No.of Letters:{count}
            </button>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt=" letters calculator"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
