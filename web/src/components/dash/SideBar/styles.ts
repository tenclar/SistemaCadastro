import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface WrapperProps {
  sidebarToogleOpen?: boolean;
}

export const Container = styled.aside<WrapperProps>`
  grid-area: menu;
  min-height: 100%;
  min-width: 300px;
  //background: #202225;
  background: #343a40;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  font-size: 12px;
  opacity: 1;
  visibility: visible;
  ${(props) =>
    !props.sidebarToogleOpen &&
    css`
      opacity: 1;
      visibility: visible;
    `}
  ${(props) =>
    props.sidebarToogleOpen &&
    css`
      opacity: 0;
      transition: visibility 0.3s linear, opacity 0.3s linear;
    `}
`;
export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const LinkHeader = styled.li`
  display: flex;
  align-items: center;
  font-weight: 500;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 8px;

  div {
    text-align: left;
    margin-left: 10px;
  }
`;

export const LinkButton = styled(Link)`
  color: #919190;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 10px 0 10px 20px;
  border-top: 1px solid #dadada;

  transition: color 0.2s;

  &:hover {
    color: #fff;

    svg {
      background-color: #f44336;
      border-radius: 50%;
    }
  }

  div {
    text-align: left;
    margin-left: 5px;
  }
`;
