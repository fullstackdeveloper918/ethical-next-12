import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter email in correct format')
    .required('email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(3, 'Password must be at least 8 characters')
    .max(50, 'Too Long!'),
})

export const initialValuesLogin = {
  email: '',
  password: '',
}

export const initialValuesRegister = {
  name: '',
  email: '',
  password: '',
  c_password: '',
}

export const validationSchemaRegister = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Please enter email in correct format')
    .required('email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(3, 'Password must be at least 8 characters')
    .max(50, 'Too Long!'),
  c_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
})

export const initialValuesContact = {
  companyName: '',
  firstName: '',
  lastName: '',
  number: '',
  email: '',
  ethicalSwagReferral: '',
  description: '',
  radio: false,
}

export const validationSchemaContact = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  companyName: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  number: Yup.number().min(2, 'Too Short!').required('Required'),
  ethicalSwagReferral: Yup.string()
    .min(15, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  description: Yup.string()
    .min(40, 'Too Short!')
    .max(200, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Please enter email in correct format')
    .required('email is required'),
  radio: Yup.boolean().required('please select terms and condition'),
})
