const validation = values => {
  let errors = {};

  if (!values.id) {
    errors.id = '필수항목을 입력해주세요.';
  } else if (!/\S+@\S+\.\S/.test(values.id)) {
    errors.id = 'email is invalid';
  }
  if (!values.password) {
    errors.password = '필수항목을 입력해주세요.';
  } else if (values.password.length < 16) {
    errors.password = 'email is invalid';
  }

  return errors;
};
export default validation;
