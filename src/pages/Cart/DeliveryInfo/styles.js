import styled from 'styled-components';
import { Breakpoint } from '../../../helpers/mixins';

export const Container = styled.div`
  margin: 3rem 0;

  @media ${Breakpoint('750')} {
    .wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
`;
