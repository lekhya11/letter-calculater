import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    inputPhrase = " ",
  }

  onChangeInput = event => {
    const {value} = event.traget
    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state
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
             <p> No.of Letters:{inputPhrase.length} </p>
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
