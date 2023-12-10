import AutorenewIcon from '@mui/icons-material/Autorenew';

import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { getFirestore, getDocs, doc, collection, query, where } from "firebase/firestore";

import { ItemList } from './ItemList';

export const ItemListContainer = props => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();

        const refCollection = id
            ? query(collection(db, "products"), where("categoryId", "==", id))
            : collection(db, "products");
        
        getDocs(refCollection).then((snapshot) => {
            if (snapshot.size === 0)console.log("no results");
            else{
                setItems(
                    snapshot.docs.map((doc) => {
                        return {id: doc.id, ...doc.data()};
                    })
                );
            }
        });
    },[id]);

    return(
        <Container className='mt-4'><h2>Productos</h2>
        <ItemList items = {items} />
        </Container>
    )
};