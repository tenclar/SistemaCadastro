import React from 'react';

import { Container, Content, Line } from './styles';

export const Footer: React.FC = () => (
  <>
    <Container>
      <Line />
      <Content>
        <span>
          Copyright <strong>DIROC - DETI</strong> © 2021{' '}
        </span>
      </Content>
    </Container>
  </>
);
