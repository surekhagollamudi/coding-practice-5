import Component from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isChanged: true}

  onButton = () => {
    this.setState(prevState => ({isChanged: !prevState.isChanged}))
  }

  render() {
    const {isChanged} = this.state
    const modeChange = isChanged ? 'dark-mode' : 'light-mode'
    const buttonText = isChanged ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="bg-container">
        <div className={`container${modeChange}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.onButton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
