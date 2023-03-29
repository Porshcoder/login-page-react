import React from 'react';
import  bgImg from '../image/pexels-pixabay-302743.jpeg';
import {useForm} from 'react-hook-form';

export default function Form() {

const{register,handleSubmit,watch,formState:{errors}}=useForm()
const onSubmit=data=>console.log(data);

 console.log(watch('username'));
  return (
    <section>
        <div className='register'>
            <div className='col-1'>
                <h2>Create Your Account</h2>
                <span>Register and Enjoy Our Services</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type='text' {...register('username',{required:true})} placeholder ='username or email'/>
                    <input type='text' {...register('password',{required:true})} placeholder ='password'/>
                    <input type='text' {...register('confirmpwd',{required:true})} placeholder ='confirm password'/>
                    <input type='text' {...register("mobile", {required : true, maxLength: 10})} placeholder ='mobile number'/>
                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    <br/>
                    {errors.username?.type === "required" && "Fill the blank to proceed!"}
                    <br/>
                    {errors.confirmpwd?.type === "required" && "Fill the blank to proceed!"}
                    <br/>
                    {errors.password?.type === "required" && "Password is required!"}
                    <button className='btn'>Sign In</button>
                </form>
            </div> 

             <div className='col-2'>
                <img src={bgImg} alt='image'/>
             </div>
        </div>
    </section>
  );
}

