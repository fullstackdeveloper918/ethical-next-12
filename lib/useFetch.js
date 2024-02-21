import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { setToken } from '../redux-setup/tokenSlice'
// import { useNavigate } from "react-router-dom";
// import { clearUserLocalData } from "../../common/utils/Functions";

const useFetch = (url, config, formdata) => {
  const [response, setResponse] = useState(undefined)
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const [error, setError] = useState(undefined)
  const [errorMessage, setErrorMessage] = useState('')
  // const navigate = useNavigate();
  const instance = axios.create({
    // baseURL: process.env.REACT_APP_BASE_URL,

    baseURL: 'https://test.cybersify.tech/Eswag/public/api',
  })
  const loadQuery = async (data, rest) => {
    const token = localStorage.getItem('token_swag')
    const headers = !Boolean(token)
      ? {
          'Content-Type': formdata ? 'multipart/form-data' : 'application/json',
        }
      : {
          // Authorization: token,
          'Content-Type': formdata ? 'multipart/form-data' : 'application/json',
        }

    return new Promise((resolve, reject) => {
      setLoading(true)
      instance({
        url: `${url}`,
        ...config,
        data,
        headers,
        ...rest,
      })
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            resolve(response)
            setError(undefined)
            response.data != null && setResponse(response.data)
            // dispatch(setToken(response.data?.data?.accessToken))
          } else {
            setError(response?.data)
            setErrorMessage(response?.data?.message ?? 'Something went wrong!')
            setResponse(undefined)
          }
          setLoading(false)
        })
        .catch((e) => {
          if (e.response?.status === 401 || e.response?.status === 403) {
            // clearUserLocalData();
            // navigate("/");
          } else if (e.response?.status === 404) {
            setResponse(undefined)
            // navigate("/not-found");
          } else {
            setResponse(undefined)
          }
          setErrorMessage(
            e.response?.data?.toString() ?? 'Something went wrong!'
          )
          setError(e.response?.data)
          setTimeout(() => {
            setLoading(false)
          }, 1)
        })
    })
  }

  return [loadQuery, { response, loading, error, errorMessage }]
}

export default useFetch
