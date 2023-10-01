import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'


export const Form = () => {
        const schema = yup.object().shape({
            name: yup.string().required("Name is required"),
            email: yup.string().email().required("Email is required, For example: 'abc@gmail.com' "),
            password: yup.string().min(4).max(20).required("Password is required and have 4-20 characters '"),
            confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Password Don't Match").required(),
        })

        const {register, handleSubmit, formState: {errors} } = useForm({
            resolver: yupResolver(schema),
        });

        const onSubmit = (data) => {

        }
    return (
        <form className='box' onSubmit={handleSubmit(onSubmit)}>
            <h1>Register</h1>
            <input type="text" id="username" placeholder="Name.." {...register("name")} />
            <p>{errors.name?.message}</p>
            <input type="text" id="email" placeholder="email" {...register("email")} />
            <p>{errors.email?.message}</p>
            <input type="text" id="pass" placeholder="password123" {...register("password")} />
            <p>{errors.password?.message}</p>
            <input type="text" id="confirmPass" placeholder="Confirm Password" {...register("confirmPassword")} />
            <p>{errors.confirmPassword?.message}</p>
            <input type="submit" id ="submit"/>
        </form>
    )
}