import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  gap: 10px;
  font-family: 'Segoe UI';
  font-size: 18px;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
