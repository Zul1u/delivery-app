const REGEX_EMAIL = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const MIN_CHARACTER_PASSWORD = 6;
const MIN_CHARACTER_NAME = 12;

const loginValidation = ({ email, password }) => {
  const validations = [
    REGEX_EMAIL.test(email),
    password.length >= MIN_CHARACTER_PASSWORD,
  ];

  return validations.every((validation) => validation === true);
};

const registerValidation = ({ email, password, name }) => {
  const validations = [
    REGEX_EMAIL.test(email),
    password.length >= MIN_CHARACTER_PASSWORD,
    name.length >= MIN_CHARACTER_NAME,
  ];

  return validations.every((validation) => validation === true);
};

export { loginValidation, registerValidation };
