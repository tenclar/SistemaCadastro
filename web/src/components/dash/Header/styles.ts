import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  grid-area: header;
  // background-color: #023e88;
  background-color: transparent;
  background-image: linear-gradient(267deg, #064578, #16a0bf);
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ToggleButton = styled.button`
  background: #117f98;
  //background-image: linear-gradient(280deg, #064578, #16a0bf);
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  height: 57px;
  width: 60px;
  border: 0;
  margin: 0;
  color: #fff;
  font-weight: 500;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.3, '#16a0bf')};
  }
`;
export const Line = styled.div`
  width: 100%;
  height: 10px;
  background: linear-gradient(
    to right,
    rgba(255, 206, 9, 1) 0%,
    rgba(158, 189, 22, 1) 30%,
    rgba(64, 164, 41, 1) 51%,
    rgba(158, 189, 22, 1) 70%,
    rgba(255, 206, 9, 1) 100%
  );
`;
