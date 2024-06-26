import React from 'react';
import c from './Form.module.css'
import {Controller, useForm} from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
//
// const regExAge = new RegExp(/^(100|[1-9][0-9]?|0)$/)
// export const scheme = yup.object().shape({
//     name: yup.string().trim().required('обязательное поле').min(2, 'необходимо как мин. 2 символа'),
//     name2: yup.string().trim().required('обязательное поле').min(5, 'необходимо как мин. 2 символа'),
//     age: yup.string().required('обязательное после').matches(regExAge, 'invalid format')
// })
// const regExAge = new RegExp(/^(100|[1-9][0-9]?|0)$/)
const regExPassword = new RegExp(/(?=.*\d)(?=.*[A-Z])/)
const regExEmail = new RegExp(/^[a-zA-Z\d-_\.]+@[a-zA-Z\d-_]+\.[a-zA-Z-_]{2,8}$/)
export const scheme = yup.object().shape({
    name: yup.string().trim().required('обязательное поле').min(3, 'необходимо как мин. 3 символа').max(30, 'max is 30 symbles'),
    email: yup.string().trim().required('requared').matches(regExEmail, 'invalid email'),
    password: yup.string().trim().required('required').min(8, 'min 8').matches(regExPassword, 'invalid password'),
    password2: yup.string().oneOf([yup.ref('password'), null], 'пароли должны совпадать')
    // age: yup.string().required('обязательное после').matches(regExAge, 'invalid format')
})

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        clearErrors,
        reset,
        setValue,
        watch,
        control,

    } = useForm({
        resolver:yupResolver(scheme)
        }
    )
    const submit = (data) => {
        console.log(data)
    }

    const error = (a) => {
        console.log(a)
    }

    // const name = watch('name')

    return (
        <form onSubmit={handleSubmit(submit, error)}>
            {/*<p>{name}</p>*/}
            {/*<Controller render={({field})=>(*/}
            {/*    <input {...field} type={`text`}/>*/}
            {/*)}*/}
            {/*            name={`name2`}*/}
            {/*            control={control}*/}

            {/*/>*/}
            {/*<input*/}
            {/*    className={c.input}*/}
            {/*    aria-invalid={errors.name ? true : false}*/}
            {/*    type={`text`}*/}
            {/*    {...register('name', {required: true,*/}
            {/*    validate: (value) => value.length > 4 || "text4>symbol"*/}
            {/*})} />*/}
            {/*<input*/}
            {/*    aria-invalid={errors.age ? true : false}*/}
            {/*    className={c.input}*/}
            {/*    type={`text`} {...register('age', {required: true})}/>*/}
            {/*<button>send</button>*/}
            {/*<button type={`button`} onClick={()=> clearErrors()}>clear</button>*/}
            {/*<button type={`button`} onClick={()=> setValue('name','beka top')}>setValue</button>*/}
            {/*<button type={`button`} onClick={()=> reset({*/}
            {/*    age:'',*/}
            {/*    name:''*/}
            {/*})}>reset</button>*/}
            <input type={`text`}
                   className={c.input}
                   aria-invalid={errors.name ? true : false}
                   {...register('name')}
            />
            <input type={`email`}
                   className={c.input}
                   aria-invalid={errors.name ? true : false}
                   {...register('email')}
            />
            <input type={`password`}
                   className={c.input}
                   aria-invalid={errors.name ? true : false}
                   {...register('password')}
            />
            <input type={`password`}
                   className={c.input}
                   aria-invalid={errors.name ? true : false}
                   {...register('password2')}
            />
            <button>send</button>
        </form>
    );
};

export default Form;