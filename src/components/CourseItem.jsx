import { Box, Rating, Typography } from '@mui/material';

const CourseItem = ( {course, rating, onRate} ) => {
    return (
        <Box sx={{ margin: 2, padding: 2, border: '1px solid #ccc', borderRadius: 1 }}>
            <Typography variant="h6">{course.name}</Typography>
            <Typography variant="body2">{course.description}</Typography>
            <Rating
                name={`rating-${course.id}`}
                value={rating || 0}
                precision={0.5}
                onChange={(e, newValue) => onRate(course.id, newValue)}
            />
            {rating && (
                <Typography variant="caption" display="block">
                    Nota: {rating}
                </Typography>
            )}
        </Box>
    )
}

export default CourseItem