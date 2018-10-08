import styled from 'styled-components';

import Box from '../primitives/Box';
import { getColor } from '../../utils';

export default styled(Box)`
  position: relative;
  width: ${p => p.size || '50px'};
  height: ${p => p.size || '50px'};
  background: ${p => (p.src ? `url(${p.src})` : p.theme.colors['primary'])};
  background-size: cover !important;
  background-position: center center !important;
  border-radius: 50%;

  &:after {
    content: "${p => p.char}";
    position: absolute;
    left: 0;
    top: 0;
    line-height: ${p => p.size || '50px'};
    width: 100%;
    text-align: center;
    color: ${p => getColor(p.theme.colors['primary'])};
    font-size: 0.9rem;
    font-weight: 700;
  }
`;
