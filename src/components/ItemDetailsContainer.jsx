import AutorenewIcon from '@mui/icons-material/Autorenew';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import Container from 'react-bootstrap/Container';

import { CartContext } from '../contexts/CartCotext';
import { ItemCount } from './ItemCount';

export const ItemDetailsContainer = () => {
  const [item, setItem] = useState(null)

  const { id } = useParams();

  const { addItem } = useContext(CartContext);

  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "products", id);

    getDoc(refDoc).then((snapshot) => {
      setItem({ id: snapshot.id, ...snapshot.data() });
    });
  }, [id]);

  const add = (quantity) => {
    addItem(item, quantity)
  }


  if (!item) {
    return <AutorenewIcon />;
  }

  return (
    <Container>
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
            <Typography variant="body2" color="text.secondary">
              ${item.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">Stock:
              {item.stock}
            </Typography>
            <ItemCount item={item} addItem={add} />
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}