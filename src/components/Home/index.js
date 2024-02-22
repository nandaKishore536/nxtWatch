import {Component} from 'react'

import {GrClose} from 'react-icons/gr'
import {BiSearchAlt2} from 'react-icons/bi'

import Header from '../Header'

import SideBar from '../SideBar'

import './index.css'

class Home extends Component {
  state = {
    showPop: true,
    search: '',
  }

  onClose = () => {
    this.setState(prevState => ({showPop: !prevState.showPop}))
  }

  displayPop = () => {
    const {showPop} = this.state

    return (
      <>
        {showPop && (
          <div className="popBg">
            <div className="firstPart">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="website logo"
                className="popImg"
              />
              <p className="popDescription">
                Buy Nxt Watch Premium prepaid plans with UPI
              </p>

              <button type="button" className="popBtn">
                GET IT NOW
              </button>
            </div>

            <div className="secondPart">
              <button
                type="button"
                className="popCloseBtn"
                onClick={this.onClose}
              >
                <GrClose size={20} />
                {}
              </button>
            </div>
          </div>
        )}
      </>
    )
  }

  onChangeInput = event => {
    this.setState({search: event.target.value})
  }

  displaySearch = () => {
    const {search} = this.state

    return (
      <div className="searchCon">
        <input
          type="search"
          className="searchElement"
          placeholder="Search"
          onChange={this.onChangeInput}
          value={search}
        />
        <button type="button" className="searchBtn">
          <BiSearchAlt2 size={20} /> {}
        </button>
      </div>
    )
  }

  render() {
    return (
      <>
        <Header />
        <div className="M">
          <SideBar />
          <div className="mainHome">
            {this.displayPop()}
            <div className="searchCon">{this.displaySearch()}</div>
          </div>
        </div>
      </>
    )
  }
}

export default Home
