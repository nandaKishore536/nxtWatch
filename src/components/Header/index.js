import {Component} from 'react'

import {IoMdMenu, IoIosLogOut} from 'react-icons/io'

import {FaMoon} from 'react-icons/fa'

import './index.css'

class Header extends Component {
  state = {
    isClick: false,
  }

  onMenu = () => {
    this.setState(prevState => ({isClick: !prevState.isClick}))
  }

  onMobile = () => {
    const {isClick} = this.state
    return (
      <nav className="navBg">
        <div className="navElements">
          <div className="imgCon">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
              className="headerLogo"
            />
          </div>
          <div className="headerIconsCon">
            <button className="headerBtn" type="button">
              <FaMoon color="#0f0f0f" size={40} />
              {}
            </button>

            <button className="headerBtn" type="button" onClick={this.onMenu}>
              <IoMdMenu color="#0f0f0f" size={40} />
              {}
            </button>

            <button className="headerBtn" type="button">
              <IoIosLogOut color="#0f0f0f" size={40} />
              {}
            </button>
          </div>
        </div>

        {isClick && (
          <ul className="navSub">
            <li className="headerList">
              <span className="navList">Home</span>
            </li>

            <li className="headerList">
              <span className="navList">Trending</span>
            </li>

            <li className="headerList">
              <span className="navList">Gaming</span>
            </li>

            <li className="headerList">
              <span className="navList">Saved Videos</span>
            </li>
          </ul>
        )}
      </nav>
    )
  }

  onDesktopView = () => (
    <nav className="navDeskBg">
      <div className="imgDeskCon">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
          className="imgDesk"
        />
      </div>

      <ul className="elementDesk">
        <li className="listDesk">
          <button type="button" className="headerBtn">
            <FaMoon color="#0f0f0f" size={40} />
            {}
          </button>
        </li>

        <li className="listDesk">
          <button type="button" className="headerBtn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
              className="headerProfile"
            />
          </button>
        </li>

        <li className="listDesk">
          <button type="button" className="logoutBtn">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )

  render() {
    return (
      <>
        {this.onMobile()}
        {this.onDesktopView()}
      </>
    )
  }
}

export default Header
