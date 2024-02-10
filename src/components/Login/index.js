import {Component} from 'react'

import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showError: false,
    errorMsg: '',
  }

  onName = event => {
    this.setState({username: event.target.value})
  }

  onPassword = event => {
    this.setState({password: event.target.value})
  }

  onCheck = () => {
    const password = document.getElementById('password')
    if (password.type === 'password') {
      password.type = 'text'
    } else {
      password.type = 'password'
    }
  }

  onSubmit = async event => {
    event.preventDefault()

    const {username, password} = this.state

    const userDetails = {username, password}

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch('https://apis.ccbp.in/login', options)
    const jsonData = await response.json()

    if (response.ok) {
      Cookies.set('jwt_token', jsonData.jwt_token, {
        expires: 30,
      })
    } else {
      this.setState({showError: true, errorMsg: jsonData.error_msg})
    }
  }

  render() {
    const {username, password, showError, errorMsg} = this.state
    return (
      <div className="loginBg">
        <form className="loginSubBg" onSubmit={this.onSubmit}>
          <div className="logoCon">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="logo"
              className="logo"
            />
          </div>

          <div className="inputCon">
            <label className="login_label" htmlFor="username">
              USERNAME
            </label>

            <input
              type="text"
              className="username"
              id="username"
              placeholder="Username"
              value={username}
              onChange={this.onName}
            />
          </div>

          <div className="inputCon">
            <label className="login_label" htmlFor="password">
              PASSWORD
            </label>

            <input
              type="password"
              className="username"
              id="password"
              placeholder="Password"
              value={password}
              onChange={this.onPassword}
            />
          </div>

          <div className="showCon">
            <input
              type="checkbox"
              id="checkbox"
              className="checkbox"
              onChange={this.onCheck}
            />
            <label htmlFor="checkbox" className="showPassword">
              Show Password
            </label>
          </div>

          <button type="submit" className="btn">
            Login
          </button>
          {showError && <p className="errorMsg">{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default Login
