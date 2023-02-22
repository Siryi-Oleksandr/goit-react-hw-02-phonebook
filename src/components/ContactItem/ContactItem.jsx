import PropTypes from 'prop-types';
import { HiUser } from 'react-icons/hi';

import { Item } from 'components/ContactItem/ContactItem.styled';

const ContactItem = ({ id, name, number }) => {
  return (
    <Item key={id}>
      <HiUser />
      <span>
        {name}: {number}
      </span>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
