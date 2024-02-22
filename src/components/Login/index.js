import {Component} from 'react'

import Cookies from 'js-cookie'

import {
  LoginBg,
  LoginSubBg,
  LogoCon,
  Logo,
  InputCon,
  Label,
  Input,
  CheckboxCon,
  Check,
  ShowPassword,
  Submit,
  ErrorMsg,
} from './styleComponents'

import ThemeContext from '../../context/ThemeContext'

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
      const {history} = this.props
      Cookies.set('jwt_token', jsonData.jwt_token, {
        expires: 30,
      })
      history.replace('/')
    } else {
      this.setState({showError: true, errorMsg: jsonData.error_msg})
    }
  }

  render() {
    const {username, password, showError, errorMsg} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <LoginBg dark={isDark}>
              <LoginSubBg dark={isDark} onSubmit={this.onSubmit}>
                <LogoCon>
                  <Logo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="logo"
                  />
                </LogoCon>

                <InputCon>
                  <Label dark={isDark} htmlFor="username">
                    USERNAME
                  </Label>

                  <Input
                    type="text"
                    id="username"
                    placeholder="Username"
                    dark={isDark}
                    value={username}
                    onChange={this.onName}
                  />
                </InputCon>

                <InputCon>
                  <Label dark={isDark} htmlFor="password">
                    PASSWORD
                  </Label>

                  <Input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    dark={isDark}
                    onChange={this.onPassword}
                  />
                </InputCon>

                <CheckboxCon>
                  <Check
                    type="checkbox"
                    id="checkbox"
                    onChange={this.onCheck}
                  />
                  <ShowPassword dark={isDark} htmlFor="checkbox">
                    Show Password
                  </ShowPassword>
                </CheckboxCon>

                <Submit type="submit">Login</Submit>
                {showError && (
                  <ErrorMsg className="errorMsg">{errorMsg}</ErrorMsg>
                )}
              </LoginSubBg>
            </LoginBg>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
