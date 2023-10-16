import React, {useState} from 'react'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.js'
import {useForm} from "react-hook-form"
import * as yup from "yup"
import { RegisterUser } from '../Utils/ApiCalls'

const ValidationSchema = yup.object().shape({
    fullName: yup.string().required("fullName is required"),
    email: yup.string().required("email is required"),
    profileImage: yup.mixed().required("Image is required"),
    password: yup.string().required().max(16).min(8).trim(),
    confirmPassword: yup.string().oneOf([yup.ref("passsword")], "password didn't match")
})

const Register:React.FC= () => {
    type FormData = yup.InferType<typeof ValidationSchema>

    const {
        register,
        handleSubmit,
        formState: {errors},
        // reset,
    } = useForm <FormData>({
        resolver: yupResolver(ValidationSchema),
    });

    const createUser = handleSubmit(async(data:FormData)=>{
        const {fullName, email, password, profileImage}:any = data
        console.log(data);
        try{
            const response = await RegisterUser ({
                fullName,
                email,
                password,
                profileImage: profileImage[0]
            })
            console.log(response);
            return response;
        }catch(err) {
            return err
        }
        // reset()
    })

    const [previewImageUrl, setPreviewImageUrl] = useState<string | undefined>(undefined)

    const onImagePreview = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const file = e.target.files![0];
        const url = URL.createObjectURL(file);

        setPreviewImageUrl(url)
    }
  return (
    <div>
        <h1>Create an Account</h1>

        <form>
            <img src={previewImageUrl}
            className='h-[100px] w-[100px] rounded-[50%] bg-salte-300 mb-5'
            />
            <div>
                <span>Profile Image</span>
                <input 
                id='pix'
                type='file'
          className='h-[40px] p-3 w-[350px] mb-5'      
          placeholder='enter your email'
          onChange={onImagePreview}
                />
            </div>
            <br />
            <br />
            <p>{errors?.profileImage?.message}</p>
            <div className='flex flex-col'>
                <span>FullName</span>
                <input 
                {...register("fullName")}
                placeholder='enter your fullName'
                className='h-[40px] w-[350px] mb-5'
                />
                <p>{errors?.fullName?.message}</p>
            </div>
            <div>
                <span>Email</span>
                <input 
                {...register("email")}
                placeholder='enter your email'
                className='h-[40px] w-[350px] mb-5'
                />
                <p>{errors?.email?.message}</p>
            </div>
            <div>
                <span>Password</span>
                <input 
                {...register("password")}
                placeholder='enter your password'
                className='h-[40px] w-[350px] mb-5'
                />
                <p>{errors.password?.message}</p>
            </div>
            <div>
                <span>Confirm Password</span>
                <input 
                {...register("confirmPassword")}
                placeholder='confirm your password'
                className='h-[40px] w-[350px] mb-5'
                />
                <p>{errors?.confirmPassword?.message}</p>
            </div>
            <p>
                Already have an Account <span>Login</span>
                </p>
                <button>Submit</button>
        </form>
      
    </div>
  )
}

export default Register
