import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function UserCard({ data }) {
  return (
    <Card sx={{ width: 260 }}>
      {data.image && (
        <CardMedia
          sx={{ height: 200, backgroundSize: 'contain' }}
          image={data.image}
          title={data.firstName}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {data.firstName} {data.lastName}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {data.email}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          גיל: {data.age}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={`/users/${data.id}`}>
          לפרטים
        </Button>
      </CardActions>
    </Card>
  );
}