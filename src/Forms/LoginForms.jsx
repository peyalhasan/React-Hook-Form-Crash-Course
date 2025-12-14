import React from 'react';
import Fieldset from '../Components/Fieldset';
import Field from '../Components/Field';
import { useForm } from 'react-hook-form';


const LoginForms = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm()


    const submitForm = (formData) => {
        const user = {email: 'x@example.com', password: '123456789'};
        const found = formData.email === user.email && formData.password === user.password;

        if(!found){
            setError('root.random', {
                message: `User with email ${formData.email} is not found`,
                type: "random",
            })
        }
    }
    return (
        <div className=" flex flex-col justify-center items-center ">
            <form onSubmit={handleSubmit(submitForm)} >
                <Fieldset label="Login Form"  >
                    <Field label='Email' error={errors.email} >
                        <input
                            {...register('email', { required: "Emain is requird." })}
                            className={`p-2 border box-border 
                         rounded-md ${errors.email ? 'border-red-500' : 'border-gray-500'} `}
                            type='email'
                            name='email'
                            id='email'
                            placeholder='Enter email address'
                        />
                    </Field>
                    <Field label='Password' error={errors.password} >
                        <input
                            {...register('password', {
                                required: 'Password is required.', minLength: {
                                    value: 8,
                                    message: "Your password must be at least 8 charactrs."
                                }
                            })}
                            className={`p-2 border box-border 
                         rounded-md ${errors.password ? 'border-red-500' : 'border-gray-500'} `}
                            type='password'
                            name='password'
                            id='password'
                            placeholder='Enter email address'
                        />
                    </Field>
                        <div>
                           {errors?.root?.random?.message}
                        </div>
                    <Field  >
                        <button
                            className=' text-md text-white cursor-pointer p-2 border rounded-lg  bg-purple-500 m-auto '
                        >Login</button>
                    </Field>
                </Fieldset >
            </form>
        </div >
    );
};

export default LoginForms;