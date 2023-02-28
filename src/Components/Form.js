import React from 'react';
import  image from '../image/pexels-pixabay-302743.jpeg';
import {useForm} from 'react-hook-form';

export default function Form() {

const{register,handleSubmit,watch,formState:{errors}}=useForm()
const onSubmit=data=>console.log(data);

// console.log(watch('username'));
  return (
    <section>
        <div className='register'>
            <div className='col-1'>
                <h2>Sign In</h2>
                <span>Register and Enjoy Our Services</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type='text' {...register('username')} placeholder ='username or email'/>
                    <input type='text' {...register('password')} placeholder ='password'/>
                    <input type='text' {...register('confirmpwd')} placeholder ='confirm password'/>
                    <input type='text' {...register("mobile", {required : true, maxLength: 10})} placeholder ='mobile number'/>
                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    <button className='btn'>Sign In</button>
                </form>
            </div> 

             <div className='col-2'>
                <img src={image} alt='image'/>
             </div>
        </div>
    </section>
  );
}

