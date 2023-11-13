import { Link } from "react-router-dom";

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export const Item = ({item}) => {
  return (
    <Card sx={{ maxWidth: 370 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        maxheight=""
        image={item.imgUrl}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.brad}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.title}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
        <Link to={`/item/${item.id}`}>
        <Button size="small" color="primary">
       Comprar
      </Button>
        </Link>
      
    </CardActions>
  </Card>
  );
}