import { Table, Thead, Trow, Th, Tbody, Td } from './Transaction.styled';

export function TransactionHistory({ transactions }) {
  return (
    <Table>
      <Thead>
        <Trow>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Trow>
      </Thead>
      <Tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <Trow key={id}>
              <Td>{type}</Td>
              <Td>{amount}</Td>
              <Td>{currency}</Td>
            </Trow>
          );
        })}
      </Tbody>
    </Table>
  );
}
