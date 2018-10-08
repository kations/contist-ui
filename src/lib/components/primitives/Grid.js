import styled from 'styled-components';

import Box from './Box';

export default styled(Box)`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${p => p.min || '300px'}, 1fr)
  );
  grid-gap: ${p => p.gap || '20px'};
`;
