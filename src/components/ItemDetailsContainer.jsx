import AutorenewIcon from '@mui/icons-material/Autorenew';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

export const ItemDetailsContainer = () => {
    const [item, setItem] = useState(null)
    const {id} = useParams();

    useEffect(() => {
        const promise = new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });

        promise.then((response) =>{
                const filters = response.find((item) => item.id == id);
                setItem(filters);})
    },[id]);

    if (!item) {
        return <AutorenewIcon/>;
    }

    return (
        <Card sx={{ maxWidth: 500, margin: 3 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={item.imgUrl}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.brand}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
}