import React from 'react';
import PropTypes from 'prop-types';

const ContactFormDisplay = ({
  action,
  values,
  isSending = false,
  handleChange,
  handleSubmit,
}) => (
  <form action={action} onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input
          type="text"
          name="name"
          placeholder="Captain Smith"
          onChange={handleChange}
          value={values.name}
          disabled={isSending}
        />
      </label>

      <label className="required">
        <span>Email</span>
        <input
          type="email"
          name="email"
          required
          onChange={handleChange}
          value={values.email}
          disabled={isSending}
          placeholder="smith@white-star-line.co.uk"
        />
      </label>

      <label>
        <span>Message</span>
        <textarea
          required
          name="message"
          id="message"
          placeholder="Ayye, captns!"
          onChange={handleChange}
          value={values.message}
          disabled={isSending}
        ></textarea>
      </label>

      <input type="hidden" name="honeeeyyyyy" value={values.honeeeyyyyy} />

      <button type="submit" data-isSending={isSending}>
        Contact the captains
      </button>
    </form>
);

ContactFormDisplay.propTypes = {
  action: PropTypes.string.isRequired,
  values: PropTypes.object,
  isSending: PropTypes.bool,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default ContactFormDisplay;
