import React from 'react';
import Fieldset from '../Components/Fieldset';
import Field from '../Components/Field';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import NumberInput from '../Components/NumberInput';

const RegestrationForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        control,
    } = useForm();

    const { fields, append, remove } = useFieldArray({
        name: "socilas",
        control,
    })
    const submitForm = (formData) => {
        console.log(formData);
    }

    return (
        <div className=" flex flex-col justify-center items-center ">
            <form onSubmit={handleSubmit(submitForm)} >
                <Fieldset label="Entr Your Basic Details"  >
                    <Field label='Enter your picture.'>
                        <input
                            {...register('picture', { required: "Picture is requird." })}
                           
                            type='file'
                            name='picture'
                            id='picture'
                        />

                    </Field>
                    <Field label='Email' error={errors.email} >
                        <input
                            {...register('email', { required: "Email is requird." })}
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
                            placeholder='Enter password..'
                        />
                    </Field>
                    <Field label='Full Name' error={errors.fname} >
                        <input
                            {...register('fname', {
                                required: 'Full Name is required.'
                            })}
                            className={`p-2 border box-border 
                         rounded-md ${errors.fname ? 'border-red-500' : 'border-gray-500'} `}
                            type='text'
                            name='fname'
                            id='fname'
                            placeholder='Enter Full Name.'
                        />
                    </Field>
                    <Field label="Age" error={errors.age}>
                        <Controller
                            name="age"
                            control={control}
                            defaultValue={1}
                            render={({ field: { ref, ...field } }) => (
                                <NumberInput
                                    id="age"
                                    className={`p-2 border box-border w-full rounded-md ${errors.age
                                        ? "border-red-500"
                                        : "border-gray-200"
                                        }`}
                                    {...field}
                                />
                            )}
                            rules={{
                                max: {
                                    value: 100,
                                    message: "Age can be between 0 and 100",
                                },
                            }}
                        />
                    </Field>

                    <Fieldset label="Enter your social details" >

                        {
                            fields.map((field, index) => {
                                return (
                                    <div
                                        className='flex   flex-col justify-between items-center w-max '
                                        key={field.id}
                                    >
                                        <Field label='Social Name' >
                                            <input

                                                className={`p-2 border box-border rounded-md border-gray-500 `}
                                                type='text'
                                                name={`socials[${index}].name`}
                                                id={`socials[${index}].name`}
                                            />
                                        </Field>
                                        <Field label='Social URL' >
                                            <input

                                                className={`p-2 border box-border rounded-md border-gray-500 `}
                                                type='text'
                                                name={`socials[${index}].url`}
                                                id={`socials[${index}].url`}
                                            />
                                        </Field>

                                        <button onClick={() => remove(index)}
                                            className=' mt-8 mr-2 text-3xl font-extrabold'
                                        >
                                            —
                                        </button>

                                    </div>
                                )
                            })
                        }

                        <button
                            className=' mt-8 text-md text-white cursor-pointer p-2 border rounded-lg  bg-gray-500 m-auto '
                            onClick={() => append({
                                name: '', url: ''
                            }
                            )}>
                            Add a Social Handle
                        </button>

                    </Fieldset>

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

export default RegestrationForm;