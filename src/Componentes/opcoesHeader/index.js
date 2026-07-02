import styled from 'styled-components'
const textoOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];

const Opcao = styled.li`
  min-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  font-size: 19px;
`

const Opcoes = styled.ul`
    display: flex;
  `

function OpcoesHeader() {
    return (
    <Opcoes>
        { textoOpcoes.map( (texto) => (
            <Opcao><p>{texto}</p></Opcao>))} 
    </Opcoes>
)}

export default OpcoesHeader;