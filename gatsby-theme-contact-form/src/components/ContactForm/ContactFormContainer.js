import React, { useState } from "react";
import PropTypes from "prop-types";

import api, { ENDPOINT } from "../../services/contact";
import ContactFormDisplay from "./ContactFormDisplay";

const INITIAL_STATE = {
  name: "",
  email: "",
  message: "",
  honeeeyyyyy: "",
};

const ContactFormContainer = ({ ...props }) => {
  const [values, setValues] = useState(INITIAL_STATE);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    if (!event.target) return;

    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsSending(true);
    api(values)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);

        setIsSending(false);
        setValues(INITIAL_STATE);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Something went wrong :/ Please try again later.");
      });
  };
  return (
    <ContactFormDisplay
      {...props}
      action={ENDPOINT}
      values={values}
      isSending={isSending}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

ContactFormContainer.propTypes = {
  message: PropTypes.string,
};

export default ContactFormContainer;
