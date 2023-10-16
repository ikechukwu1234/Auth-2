import React from 'react'
import  * as yup from "yup"
import {useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginUser } from '../Utils/ApiCalls'
import {useNavigate} from "react-router-dom"

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
})

type FormData = yup.InferType<typeof schema>

const Login :React.FC= () => {
    const Navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onLoginSubmit = handleSubmit(async(data:FormData) =>{
        try{
            const response = await LoginUser(data);
            window.localStorage.setItem("k10xAuth", JSON.stringify(true));
            Navigate("/dashboard")
            console.log(response)
        }catch (err) {
            return err
        }
        console.log(data)
    })
  return (
    <div>
        <form onSubmit={onLoginSubmit}>
            <div>
                <input
                {...register("email")}
                placeholder='enter your email'
                />
                <p>{errors?.email?.message}</p>
            </div>
            <div>
                <input 
                {...register("password")}
                placeholder='enter your password'
                />
                <p>{errors?.password?.message}</p>
            </div>
            <button>Submit</button>
        </form>
      
    </div>
  )
}

export default Login
