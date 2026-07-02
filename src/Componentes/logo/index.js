import logo from '../../imagens/logo.svg';
import styled from 'styled-components'

const LogoContainer = styled.div`
  display: flex;
  font-size: 25px
  `

const LogoImg = styled.img`
    width: 70px;
    margin-right: 30px;
`
function Logo () {
    return (
        <LogoContainer>
            <LogoImg
                src={logo}
                alt="logo"
               ></LogoImg>
            <p><strong>LivrariaOnline</strong> </p>
        </LogoContainer>
    )
}

export default Logo;
