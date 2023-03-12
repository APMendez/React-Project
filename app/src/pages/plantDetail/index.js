import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlantCard from "../../components/plantCard";
import "./styles.css"
//FIREBASE
import {collection, query, getDocs, where, documentId} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import DetailCard from "../../components/plantDetailCard";


const PlantDetail = () => {
    const [plantsData, setPlantsData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getPlants = async () => {
        const q = query(collection(db, "plants"), where(documentId(), "==", id));
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            docs.push({
            ...doc.data(),
            id: doc.id,
            });
        });
        setPlantsData(docs);
        };
        getPlants();
    }, [id]);

    return (
        <>
            <div className="plantDetailDiv">
                {plantsData.map((data) => {
                    return (
                        <DetailCard prod={data}/>
                    );
                })}
            </div>
        </>
    );
}; 

export default PlantDetail;