import { useState } from 'react';
import CourseItem from './CourseItem';
import { Box, Input, Rating, Typography } from '@mui/material';

const CourseList = () => {
    const courses = [
        { id: 1, name: 'Curso de React', description: 'Aprenda'},
        { id: 2, name: 'Psicologia', description: 'Aprenda sobre psicologia'},
        { id: 3, name: 'Artes Cênicas', description: 'Aprenda sobre artes cênicas'},
        { id: 4, name: 'Desenvolvimento Web', description: 'Aprenda sobre desenvolvimento web'},
    ];

    const [ratings, setRatings] = useState({});

    const handleRatingChange = (courseId, newValue) => {
        setRatings(prevRatings => ({
            ...prevRatings,
            [courseId]: newValue,
        }));
    }

    const getAverage = () => {
        const value = Object.values(ratings);
        if (value.length === 0) return 0;
        const sum = value.reduce((acc, curr) => acc + curr, 0);
        return (sum / value.length).toFixed(1);
    }

    const [text, setText] = useState('');

    const [number, setNumberState] = useState({value: 0, type: ''});

    const setNumber = (value, type) => {
        setNumberState({ value, type });
    }

    const handleTextChange = (e) => {
        setText((e.target.value).length)
    }

    const handleNumberChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value)) {
            if(value % 2 === 0) {
            setNumber(value, 'par');
            } else {
                setNumber(value, 'ímpar');
            }
        }
    }

    return (
        <Box sx={{ padding: 2, textAlign: 'center', boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h4" component="h4" gutterBottom>
                Lista de Cursos
            </Typography>
            {courses.length > 0 ? (
                courses.map(course => (
                    <CourseItem
                        key={course.id}
                        course={course}
                        rating={ratings[course.id]}
                        onRate={handleRatingChange}
                    />
                ))
            ) : (
                <Typography variant="body2" color="textSecondary">
                    Nenhum curso disponível
                </Typography>
            )}
            <Box sx={{ marginTop: 2 }}>
                <Typography variant="body2" color="textSecondary">
                    Média: {getAverage()}
                </Typography>
                <Input placeholder='Digite aqui' onChange={handleTextChange} ></Input>
                <Typography>O texto é: {text}</Typography>

                <Input type='number' placeholder='Digite um número' onChange={handleNumberChange} ></Input>
                <Typography>O número é: {number.value} {number.type}</Typography>
            </Box>
        </Box>
    )
}

export default CourseList