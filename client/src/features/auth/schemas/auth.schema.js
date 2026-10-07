export const loginSchema = {
  validate: (values) => {
    const errors = {};
    if (!values.email) errors.email = 'Email address is required';
    if (!values.password) errors.password = 'Password is required';
    return errors;
  },
};

export const registerSchema = {
  validate: (values) => {
    const errors = {};
    if (!values.name) errors.name = 'Full name is required';
    if (!values.email) errors.email = 'Email address is required';
    if (!values.phone) errors.phone = 'Phone number is required';
    if (!values.password || values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    return errors;
  },
};
