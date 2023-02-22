import PropTypes from 'prop-types';
import { HiUser } from 'react-icons/hi';
import { Item, List } from 'components/ContactList/ContactList.styled';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <HiUser />
          {name}: {number}
        </Item>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default ContactList;
