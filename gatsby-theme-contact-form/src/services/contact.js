export const ENDPOINT = `${process.env.GATSBY_CONTACT_FORM_URL || ''}`;

const postToEndpoint = (body) =>
  fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

export default postToEndpoint;
