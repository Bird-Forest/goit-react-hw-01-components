import styled from 'styled-components';

export const Table = styled.table`
  max-width: 360px;

  border: 1px solid #e9eef3;
  border-radius: 5px;
  box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.75);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
`;
export const Thead = styled.thead`
  text-align: center;
  height: 28px;
`;
export const Trow = styled.tr`
  background-color: #3aff9e;
`;

export const Th = styled.th`
  width: 120px;
  font-size: 20px;
`;
export const Tbody = styled.tbody`
  max-width: 360px;
  margin-left: auto;
  margin-right: auto;
`;
export const Td = styled.td`
  font-size: 16px;
  text-align: center;
  color: #006633;
  font-weight: 400;
  &:hover {
    font-weight: 700;
  }
`;
