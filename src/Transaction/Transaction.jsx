import PropTypes from 'prop-types';
import transactions from '../data/transactions.json';
import { Table, Thead, Trow, Th, Tbody, Td } from './Transaction.styled';

export function TransactionHistory() {
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

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
