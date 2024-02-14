// Write your code here
import {component} from 'react'
import './index.css'
class ShowHide extends Components {
  state = {isFirstName: false, isLastName: false}

  showFirstname = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }
  showLastname = () => {
    this.setState(prevState => ({isFirstName: !prevState.isLastName}))
  }
  render() {
    const {isFirstName, isLastName} = this.state
    return (
      <div className="bg-container">
        <h1>Show/Hide</h1>
        <div className="show-hide-container">
          <div className="show-container">
            <button
              className="button"
              type="button"
              onClick={this.showFirstname}
            >
              {' '}
              Show/Hide Firstname
            </button>
            (isFirstname <p className="name">Joe</p>)
          </div>
          <div className="hide-container">
            <button
              className="button"
              type="button"
              onClick={this.showLastname}
            >
              {' '}
              Show/Hide Lasstname
            </button>
            (isFirstname <p className="name">Jonas</p>)
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
