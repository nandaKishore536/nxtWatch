import styled from 'styled-components'

export const LoginBg = styled.div`
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f1f5f9')};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  @media screen and (min-width: 768px) {
    padding: 30px;
  }
`

export const LoginSubBg = styled.form`
  background-color: ${props => (props.dark ? '#1e293b' : '#f8fafc')};
  display: flex;
  flex-direction: column;
  padding: 12px;
  border-radius: 8px;
  width: 80%;
  box-shadow: black;

  @media screen and (min-width: 768px) {
    border-radius: 12px;
    padding: 30px 15px 30px 15px;
    width: 40%;
  }
`

export const LogoCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`
export const Logo = styled.img`
  width: 130px;
  margin-top: 10px;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    width: 240px;
    margin-top: 18px;
    margin-bottom: 18px;
  }
`

export const InputCon = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px;
  margin-top: 2px;
  margin-bottom: 2px;

  @media screen and (min-width: 768px) {
    padding: 4px;
    margin-top: 4px;
    margin-bottom: 4px;
  }
`

export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: 500;
  color: ${props => (props.dark ? '#f1f5f9' : ' #94a3b8')};
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const Input = styled.input`
  padding: 8px 10px 8px 10px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 10px;
  border: 1px solid;
  border-color :${props => (props.dark ? '#f1f1f1' : '#909397')}
  color:${props => (props.dark ? '#f1f1f1' : '#909397')};
  border-radius: 2px;
  margin-top: 4px;
  outline: none;

  @media screen and (min-width: 768px) {
    padding: 15px 18px 15px 18px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 4px;
  }
`
export const CheckboxCon = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
`

export const Check = styled.input`
  outline: none;
  margin-right: 2px;
`

export const ShowPassword = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  color: ${props => (props.dark ? '#f1f1f1' : '#181818')};
  margin-left: 2px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-left: 4px;
  }
`

export const Submit = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 500;
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 2px;
  padding: 8px;
  margin-top: 4px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 12px;
    border-radius: 4px;
    margin-top: 6px;
  }
}
`

export const ErrorMsg = styled.p`
  color: #ff0000;
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: 500;
  margin: 0px;
  padding: 0px;
@media screen and (min-width: 768px) {
    font-size: 13px;
  }
}

`
