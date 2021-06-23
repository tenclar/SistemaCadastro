import React from 'react';

import { FaListAlt, FaRegCircle } from 'react-icons/fa';
import { AiOutlineDashboard } from 'react-icons/ai';

import { Container, LinkList, LinkHeader, LinkButton } from './styles';

interface ToogleProps {
  toogleOpen?: boolean;
}
export const Sidebar: React.FC<ToogleProps> = ({ toogleOpen }) => (
  <Container sidebarToogleOpen={toogleOpen}>
    <LinkList>
      <LinkHeader>
        <AiOutlineDashboard />
        <div>Dashboard</div>
      </LinkHeader>
      <hr />
      <LinkHeader>
        <FaListAlt />
        <div>Cadastros</div>
      </LinkHeader>

      <LinkButton to="/cadastro/orgaos">
        <FaRegCircle /> <div>Ogãos</div>
      </LinkButton>
      <LinkButton to="/cadastro/centrais">
        <FaRegCircle /> <div>Centrais</div>
      </LinkButton>
      <LinkButton to="/cadastro/pracas">
        <FaRegCircle /> <div>Praças</div>
      </LinkButton>
    </LinkList>
  </Container>
);
