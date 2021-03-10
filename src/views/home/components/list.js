import styled from 'styled-components'
import theme from '../../../components/theme'


const List = styled.div`
  display: flex;
  flex-flow: row wrap;
  
  @media (max-width: ${theme.viewports.tablet}) {
    flex-flow: column;
  }
`;

export default List