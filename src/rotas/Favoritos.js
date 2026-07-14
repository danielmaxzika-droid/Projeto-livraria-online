import Header from '../Componentes/Header'
import styled from 'styled-components'
import Pesquisa from '../Componentes/Pesquisa'
import UltimosLancamentos from '../Componentes/UltimosLancamentos'

const AppContainer = styled.div`
  
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);

`

function Favoritos() {
  return (
    <AppContainer>
      <Pesquisa />
    </AppContainer>
  );
}

export default Favoritos;
