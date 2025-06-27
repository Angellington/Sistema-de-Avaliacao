import { useForm } from 'react-hook-form'
import { Box, Button, Input, FormControl, FormControlLabel, Typography, Select, MenuItem } from '@mui/material'
const Gender = () => {
    const { register, handleSubmit, formState: { errors }} = useForm( )
    const onSubmit = (data) => console.log(data)
    console.log('Errors', errors)
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName", { required: true, maxLength: {
            value: 20, message: 'Mais de 20 digitos' }})}/>
        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i, message: 'Insira o alfabeto' })} />
        <input type="number" {...register("age", { min: 18, max: 99, message: 'Tenha mais de 18'}, )} />
        <input type="submit" />
        </form>
    )
}

export default Gender