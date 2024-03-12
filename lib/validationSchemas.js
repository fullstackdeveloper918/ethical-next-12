import * as Yup from 'yup'

export const initialValuesLogin = {
  email: '',
  password: '',
}

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter email in correct format')
    .required('email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(3, 'Password must be at least 3 characters')
    .max(50, 'Too Long!'),
})

export const initialValuesForgotEmail = {
  email: '',
}

export const validationSchemaForgotEmail = Yup.object().shape({
  email: Yup.string()
    .email('Please enter email in correct format')
    .matches(/^[ a-zA-Z0-9.@]+$/, "This email doesn't seem to be valid")
    .required('email is required'),
})

export const initialValuesForgotPassword = {
  new_password: '',
  confirm_password: '',
}

export const validationSchemaForgotPassword = Yup.object().shape({
  new_password: Yup.string()
    .required('Password is required')
    .min(3, 'Password must be at least 8 characters')
    .max(50, 'Too Long!'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('new_password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
})

export const initialValuesSwagOrderForm1stStep = {
  selectedDate: '',
  textarea: '',
  swagPack: false,
  Warehousing: false,
  graphicDesign: false,
  pickAndPack: false,
  notSure: false,
}

export const validationSchemaSwagOrderForm1stStep = Yup.object().shape({
  // selectedDate: Yup.date(),
  // .matches(/^[ a-zA-Z]+$/, 'Please Enter Correct Name')
  // .min(2, 'Too Short!')
  // .max(70, 'Too Long!')
  // .required('Required'),
  textarea: Yup.string().min(10, 'Too Short!').max(70, 'Too Long!'),
  // .required('required'),
})

export const initialValuesRegister = {
  name: '',
  email: '',
  password: '',
  c_password: '',
}

export const validationSchemaRegister = Yup.object().shape({
  name: Yup.string()
    .matches(/^[ a-zA-Z]+$/, 'Please Enter Correct Name')
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
    .matches(/^[ a-zA-Z]+$/, 'Please Enter Correct Name')
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .matches(/^[ a-zA-Z]+$/, 'Please Enter Correct Name')
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  companyName: Yup.string()
    .matches(/^[ a-zA-Z]+$/, 'Special Characters are not allowed')
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(/^[0-9]+$/, 'Incorrect Number')
    .min(10, 'Too Short')
    .max(10, 'Please enter valid number')
    .required('Required'),
  ethicalSwagReferral: Yup.string()
    .min(15, 'Too Short!')
    .matches(/^[ a-zA-Z]+$/, 'Insert only normal character')
    .max(70, 'Too Long!')
    .required('Required'),
  description: Yup.string()
    .matches(/^[ a-zA-Z]+$/, 'Insert only normal character')
    .min(40, 'Too Short!')
    .max(200, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Please enter email in correct format')
    .matches(/^[ a-zA-Z0-9.@]+$/, 'Insert only normal character')
    .required('email is required'),
  radio: Yup.boolean().required('please select terms and condition'),
})

export const initialValuesShipping = {
  singleAddress: '',
  country: '',
  firstName: '',
  lastName: '',
  number: '',
  email: '',
  companyName: '',
  address: '',
  apartment: '',
  city: '',
  state: '',
  pin: '',
}

export const validationSchemaShipping = Yup.object().shape({
  singleAddress: Yup.string()
    .matches(/^[ a-zA-Z0-9.,:_-]+$/, 'Insert only normal character')
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  country: Yup.string()
    .matches(/^[ a-zA-Z]+$/, 'Incorrect Country')
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  firstName: Yup.string()
    .matches(/^[ a-zA-Z]+$/, 'Please Enter Correct Name')
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .matches(/^[ a-zA-Z]+$/, 'Please Enter Correct Name')
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(/^[0-9]+$/, 'Incorrect Number')
    .required('Please enter number')
    // .test('Digits only', 'digits_only', digitsOnly)
    .min(10, 'Too Short')
    .max(10, 'Please enter valid number'),
  email: Yup.string()
    .matches(/^[ a-zA-Z0-9.@]+$/, 'Insert only normal character')
    .email('Please enter email in correct format')
    .required('email is required'),
  companyName: Yup.string()
    .matches(/^[ a-zA-Z]+$/, 'Special Characters are not allowed')
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  address: Yup.string()
    .matches(/^[ a-zA-Z0-9-.:,]+$/, 'Insert only normal character')
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  apartment: Yup.string()
    .matches(/^[ a-zA-Z0-9]+$/, 'Special Characters are not allowed')
    .min(2, 'Too Short!')
    .max(10, 'Too Long!'),
  city: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long')
    .matches(/^[ a-zA-Z]+$/, 'Special Characters are not allowed')
    .required('Required'),
  state: Yup.string()
    .matches(/^[ a-zA-Z]+$/, 'Special Characters are not allowed')
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
  pin: Yup.string()
    .matches(/^[ 0-9]+$/, 'Special Characters are not allowed')
    .required('Please enter pin code')
    // .test('Digits only', 'digits_only', digitsOnly)
    .min(2, 'Too Short')
    .max(10, 'Too Long'),
})

export const initialValuesSwag = {
  email: '',
  password: '',
  selectedDate: new Date().toISOString().split('T')[0],
  content: '',
  inputCheckBox: false,
}

export const validationSchemaSwag = Yup.object().shape({
  content: Yup.string()
    .matches(/^[ a-zA-Z]+$/, 'Insert only normal character')
    .min(40, 'Too Short!')
    .max(200, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Please enter email in correct format')
    .matches(/^[ a-zA-Z0-9.@]+$/, 'Insert only normal character')
    .required('email is required'),
  inputCheckBox: Yup.boolean(),
})

export const initialValuesNewLetter = {
  email: '',
}

export const validationNewsLetter = Yup.object().shape({
  email: Yup.string()
    .email('Please enter email in correct format')
    .matches(/^[ a-zA-Z0-9.@]+$/, 'Insert only normal character')
    .required('email is required'),
})
