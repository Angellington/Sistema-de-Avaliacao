import { TextField } from '@mui/material';

import { useForm } from 'react-hook-form';


const InputCPF = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm( {
        defaultValues: {
            firstName: 'Minerva',
            lastName: 'Alves'
        }
    } );

    const onSubmit = data => {
        console.log(data);
    };

    console.log(watch())

    console.log('Errors:', errors.firstName?.message)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue={''} {...register("firstName", { required: true, maxLength: { value: 4, message: "Min value is 4" }})}/>
            <input placeholder='lastName'  {...register("lastName", { required: true, maxLength: { value: 4, message: "Min Value is 4" } })}/>
            {errors.exampleRequired && <span>This field is required!</span>}
            {console.log(errors.firstName?.message)}
            <p>{errors.firstName?.message}</p>
            <p>{errors.lastName?.message}</p>
            <input type="submit" />

        </form>

    )
}
export default InputCPF;