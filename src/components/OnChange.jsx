import { useState, useEffect } from 'react';
import { Box, Input, Typography, TextField } from '@mui/material';

import InputMask from 'react-input-mask';
import InputCPF from './InputCPF';


const OnChange = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    const [isValidEmail, setIsValidEmail] = useState(true);
    

    const handleNomeChange = (e) => {
        setNome(e.target.value);
    }
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if(!e.target.value.includes('@')){
            setIsValidEmail(false);
        } else {
            setIsValidEmail(true);
        }
    }   

    const [value, setValue] = useState('');

    const [cpf, setCpf] = useState('');


    return (
        <Box sx={{ padding: 2, textAlign: 'center', boxShadow: 3, borderRadius: 2 }}>
            <Typography>
                Múltiplos campos (nome, email)
            </Typography>
            <Input placeholder='Nome' onChange={handleNomeChange}></Input>
            <Input placeholder='Email' onChange={handleEmailChange}></Input>
            <Typography>
                Nome: {nome}
            </Typography>
            <Typography>
                Email: {email}
                {!isValidEmail && <span style={{ color: 'red' }}> - Email inválido</span>}
            </Typography>

            <InputCPF></InputCPF>
            


        </Box>
    )
}

export default OnChange