import PropTypes from 'prop-types';
import { HiUser } from 'react-icons/hi';

import { Item } from 'components/ContactItem/ContactItem.styled';

const ContactItem = ({ name, number }) => {
  return (
    <Item>
      <HiUser />
      <span>
        {name}: {number}
      </span>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
