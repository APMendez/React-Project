import React, { useEffect, useState } from 'react'
import './styles.css';
import { Link } from "react-router-dom";
import PlantDetail from '../../pages/plantDetail';

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
        // console.log('DATA:', querySnapshot);
        querySnapshot.forEach((doc) => {
            // console.log('DATA:', doc.data(), 'ID:', doc.id);
            docs.push({ ...doc.data(), id: doc.id });
        });
        // console.log(docs);
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
                key={prod.id}
            >
                <PlantDetail prods={prod} />
            </Link>
            );
        })}        
    </main>
    )
}

export default ItemListContainer


