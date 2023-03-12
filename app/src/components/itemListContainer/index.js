import React, { useEffect, useState } from 'react'
import './styles.css';
import { Link } from "react-router-dom";
import PlantCard from '../plantCard';

// FIRBASE - FIRESTORE
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";



const ItemListContainer = () => {
    const [prods, setProds] = useState([]);

    useEffect(() => {
        const getProds = async () => {
        const q = query(collection(db, "plants"));
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
        });
        setProds(docs);
        };
        getProds();
    }, []);

    return (
    <main className='itemListContainer'>
        {prods.map((prod) => {
            return (
                <Link
                to={`detail/${prod.id}`}
                style={{ textDecoration: "none" }}
                key={prod.id}>
                    <PlantCard img={prod.img} nombre={prod.nombre} precio={prod.precio} id={prod.id} />
                </Link>
            );
        })}        
    </main>
    )
}

export default ItemListContainer;