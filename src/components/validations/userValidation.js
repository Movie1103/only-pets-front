import * as yup from 'yup';

const userSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, 'Too short!')
    .required('First name is required.'),
  lastName: yup
    .string()
    .min(2, 'Too short!')
    .required('Last name is required.'),
  username: yup.string().min(2, 'Too short!').required('Username is required.'),
  email: yup
    .string()
    .email('Must be a valid email!')
    .required('Email is required.'),
  password: yup
    .string()
    .min(6, 'Password must be more than 6 characters.')
    .required('Password is required.'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Password is not matched.')
    .required('Password is required.'),
});

const loginSchema = yup.object().shape({
  usernameOrEmail: yup.string().required('Username or Email is required.'),
  password: yup
    .string()
    .min(6, 'Password must be more than 6 characters.')
    .required('Password is required.'),
});

export { userSchema, loginSchema };
