import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import {
  SideContainer,
  SideUl,
  SideLi,
  SideBtn,
  SidePar,
  SideContact,
  SideConH1,
  ImgCon,
  SideImg,
} from './styleComponents'

const SideBar = () => (
  <SideContainer>
    <SideUl>
      <SideLi>
        <SideBtn type="button">
          <AiFillHome size={40} />
          <SidePar>Home</SidePar>
        </SideBtn>
      </SideLi>

      <SideLi>
        <SideBtn type="button">
          <HiFire size={40} />
          <SidePar>Trending</SidePar>
        </SideBtn>
      </SideLi>

      <SideLi>
        <SideBtn type="button">
          <SiYoutubegaming size={40} />
          <SidePar>Gaming</SidePar>
        </SideBtn>
      </SideLi>

      <SideLi>
        <SideBtn type="button">
          <BiListPlus size={40} />
          <SidePar>Saved videos</SidePar>
        </SideBtn>
      </SideLi>
    </SideUl>

    <SideContact>
      <SideConH1>CONTACT US</SideConH1>
      <ImgCon>
        <SideLi>
          <SideImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
        </SideLi>

        <SideLi>
          <SideImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />
        </SideLi>

        <SideLi>
          <SideImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
          />
        </SideLi>
      </ImgCon>

      <SidePar>Enjoy! Now to see your channels and recommendations!</SidePar>
    </SideContact>
  </SideContainer>
)

export default SideBar
