import styled from 'styled-components'

export const NotBg = styled.div`
  background-color: ${props => (props.back ? '#181818' : '#f9f9f9')};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NotSub = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const NotImg = styled.img`
  width: ${props => (props.back ? '80%' : '35%')};
`
export const NotH1 = styled.h1`
  color: ${props => (props.back ? '#f9f9f9' : '#0f0f0f')};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const NotPar = styled.p`
  color: ${props => (props.back ? '#f1f1f1' : '#475569')};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
