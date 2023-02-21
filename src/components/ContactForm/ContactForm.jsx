import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import { Button, ButtonWrapper } from './FeedbackOptions.styled';
// import { AiFillDislike, AiFillLike, AiFillDownCircle } from 'react-icons/ai';

class ContactForm extends Component {
  state = {
    name: '',
  };

  render() {
    const { name } = this.state;
    return (
      <form>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  //   options: PropTypes.shape({
  //     good: PropTypes.number.isRequired,
  //     neutral: PropTypes.number.isRequired,
  //     bad: PropTypes.number.isRequired,
  //   }).isRequired,
  //   onLeaveFeedback: PropTypes.func.isRequired,
};

export default ContactForm;
