import './App.css'
import { Box, Typography } from '@mui/material'
import CourseList from './components/CourseList'


function App() {

  return (
    <>
      <Box sx={{ padding: 2 , textAlign: 'center', boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h3" component="h3" gutterBottom>
          Sistema de Avaliação
        </Typography>
        <Typography variant="body1">
          É um sistema de avaliação de cursos.
        </Typography>
      </Box>

      <CourseList />

    </>
  )
}

export default App
