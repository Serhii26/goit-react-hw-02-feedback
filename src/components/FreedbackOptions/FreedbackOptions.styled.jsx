import styled from 'styled-components';

export const Container = styled.ul`
  list-style: none;
  display: flex;
  gap: 25px;
`;

export const Button = styled.button`
  padding: 10px;
  width: 60px;
  background-color: #ffffff;
  border: 1px solid #5b5555;
  border-radius: 8px;
  cursor: pointer;
  :focus {
    background-color: #e7dbdb;
  }
`;
