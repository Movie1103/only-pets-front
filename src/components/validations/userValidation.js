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

const addServiceSchema = yup.object().shape({
  title: yup.string().required('Title is required.'),
  openAt: yup.string().required('Opening time is required.'),
  closeAt: yup.string().required('Closing time is required.'),
  phoneNumber: yup.string().required('Phone number is required.'),
  grooming: yup.boolean().required(),
  shop: yup.boolean().required(),
  hospital: yup.boolean().required(),
  hotel: yup.boolean().required(),
  addressTitle: yup.string().required('Title is required.'),
  subDistrict: yup.string().required('Sub-district is required.'),
  district: yup.string().required('District is required.'),
  province: yup.string().required('Province is required.'),
  zipcode: yup.string().required('Zip code is required.'),
  latitude: yup.string().required('Latitude is required.'),
  longitude: yup.string().required('Longitude is required.'),
});

export { userSchema, loginSchema, addServiceSchema };
