import PropTypes from 'prop-types';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { HiUser } from 'react-icons/hi';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <HiUser />
          {name}: {number}
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  //   options: PropTypes.shape({
  //     good: PropTypes.number.isRequired,
  //     neutral: PropTypes.number.isRequired,
  //     bad: PropTypes.number.isRequired,
  //   }).isRequired,
  //   onLeaveFeedback: PropTypes.func.isRequired,
};

export default ContactList;
