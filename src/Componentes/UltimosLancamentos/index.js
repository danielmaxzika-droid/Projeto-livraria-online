import { livros } from './dadosUltimosLancamentos'
import styled from 'styled-components'
import { Titulo }  from '../Titulo'
import CardRecomenda from '../CardRecomenda'
import Imagemlivro2 from '../../imagens/livro2.png'


const UltimosLancamentosContainer = styled.section`
   background-color: #EBECEE;
   padding-bottom: 20px;
   display: flex;
   flex-direction: column;
`
const NovosLivrosContainer = styled.div`
   margin-top: 30px;
   display: flex;
   width: 100%;
   justify-content: center;
   cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
        <Titulo 
            cor="#000000" 
            tamanhoFonte="46px" 
            alinhamento="center">
        ÚLTIMOS LANÇAMENTOS</Titulo>
                <NovosLivrosContainer>
                    {livros.map(livro => (        
                        <img src={livro.src} alt={livro.alt} />
                    ))}
                </NovosLivrosContainer>
            <CardRecomenda
             titulo='Talvez você se interesse por...'
             subtitulo='Angular 11'
             descricao='Construindo uma aplicação moderna com Angular 11'
             img={Imagemlivro2}
            />
        </UltimosLancamentosContainer>
    )
}
            
export default UltimosLancamentos;