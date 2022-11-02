const REGEX_EMAIL = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const MIN_CHARACTER = 6;

const emailAndPasswordValidation = ({ email, password }) => {
  const validations = [
    REGEX_EMAIL.test(email),
    password.length >= MIN_CHARACTER,
  ];

  return validations.every((validation) => validation === true);
};

export default emailAndPasswordValidation;
