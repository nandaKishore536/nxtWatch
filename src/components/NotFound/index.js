import {NotBg, NotSub, NotImg, NotH1, NotPar} from './styleComponent'

import Header from '../Header'

import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      const imgUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      console.log(isDark)

      return (
        <>
          <Header />
          <NotBg back={isDark}>
            <NotSub>
              <NotImg back={isDark} src={imgUrl} alt="not found" />
              <NotH1 back={isDark}>Page Not Found</NotH1>
              <NotPar back={isDark}>
                We are sorry,the page you requested could not be found.
              </NotPar>
            </NotSub>
          </NotBg>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
