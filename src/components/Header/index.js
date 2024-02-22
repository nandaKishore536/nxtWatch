import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {IoMdMenu, IoIosLogOut} from 'react-icons/io'

import {FaMoon} from 'react-icons/fa'

import {FiSun} from 'react-icons/fi'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, changeTheme} = value

      const Logo = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const icon = isDark ? (
        <FiSun color="#f9f9f9" size={40} />
      ) : (
        <FaMoon color="#0f0f0f" size={40} />
      )

      const Menu = isDark ? (
        <IoMdMenu color="#f9f9f9" size={40} />
      ) : (
        <IoMdMenu color="#0f0f0f" size={40} />
      )

      const LogOut = isDark ? (
        <IoIosLogOut color="#f9f9f9" size={40} />
      ) : (
        <IoIosLogOut color="#0f0f0f" size={40} />
      )

      const Back = isDark ? 'navBg2' : 'navBg'

      const Desk = isDark ? 'navDeskBg2' : 'navDeskBg'

      const onPress = () => {
        changeTheme()
      }

      const onLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const onMobile = () => (
        <nav className={Back}>
          <div className="navElements">
            <div className="imgCon">
              <img src={Logo} alt="website logo" className="headerLogo" />
            </div>
            <div className="headerIconsCon">
              <button className="headerBtn" type="button" onClick={onPress}>
                {icon}
              </button>

              <button className="headerBtn" type="button">
                {Menu}
              </button>

              <button className="headerBtn" type="button" onClick={onLogout}>
                {LogOut}
              </button>
            </div>
          </div>

          {false && (
            <ul className="navSub">
              <Link to="/">
                <li className="headerList">
                  <span className="navList">Home</span>
                </li>
              </Link>

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

      const onDesktopView = () => (
        <nav className={Desk}>
          <div className="imgDeskCon">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
              className="imgDesk"
            />
          </div>

          <ul className="elementDesk">
            <li className="listDesk">
              <button type="button" className="headerBtn" onClick={onPress}>
                {icon}
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
              <button type="button" className="logoutBtn" onClick={onLogout}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      )

      return (
        <>
          {onMobile()}
          {onDesktopView()}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
