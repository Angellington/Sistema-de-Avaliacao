import * as React from 'react'

import { useForm } from 'react-hook-form';

let renderCount = 0;

const StartingWithHook = () => {
    renderCount++;

    const { register, handleSubmit } = useForm()

    return (
        <div>
            <header>
                <span>{renderCount}</span>
            </header>

            <form onSubmit={handleSubmit((data) => {
                console.log(data)
            })}>
                <input {...register("firstName", { required: true })} placeholder='First Name' />
                <input {...register("lastName", { required: true })} placeholder='Last Name' />
                <input type="submit" />
            </form>
        </div>
    )
}

export default StartingWithHook