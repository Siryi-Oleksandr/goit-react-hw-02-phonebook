import styled from 'styled-components';

export const FilterLabel = styled.label`
  width: 450px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* justify-content: center;
  align-items: center; */

  font-family: 'Segoe UI';
  font-size: 18px;
`;

export const Input = styled.input`
  padding: 5px;
  width: 250px;
  border: 2px solid #ccc;
  border-radius: 4px;
  outline: none;
  font-size: 14px;

  transition: border 250ms ease-in-out;

  &:hover,
  &:focus {
    border: 2px solid #1664e2;
  }
`;