import styled from 'styled-components'

export const SideContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    min-height: 100vh;
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    justify-content: space-between;
    padding: 10px 20px 10px 20px;
    background-color: #f9f9f9;
  }
`

export const SideUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`

export const SideLi = styled.li`
  list-style-type: none;
`
export const SideBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  display: flex;
`
export const SidePar = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #000000;
  font-weight: 500;
  margin-left: 10px;
  margin-bottom: 40px;
`
export const SideConH1 = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: #000000;
  font-weight: 500;
  margin-left: 45px;
`

export const SideContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ImgCon = styled.ul`
  display: flex;
  list-style-type: none;
`

export const SideImg = styled.img`
  width: 30px;
  margin: 10px;
`
