import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import PlantCard from "../../components/plantCard";

//FIREBASE
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";


const PlantDetail = () => {
    const [plantsData, setPlantsData] = useState([]);

    useEffect(() => {
        const getPlants = async () => {
        const q = query(collection(db, "plants"));
        const docs = [];
        const querySnapshot = await getDocs(q);
        // console.log('DATA:', querySnapshot);
        querySnapshot.forEach((doc) => {
            // console.log('DATA:', doc.data(), 'ID:', doc.id);
            docs.push({
            ...doc.data(),
            id: doc.id,
            });
        });
        // console.log(docs);
        setPlantsData(docs);
        };
        getPlants();
    }, []);

    return (
        <>
        {" "}
        
            <div className="CardListContainer">
            {" "}
            {plantsData.map((data) => {
                return (
                <Link
                    to={`detail/${data.id}`}
                    style={{
                    textDecoration: "none",
                    }}
                    key={data.id}
                >
                    <PlantCard plantsData={data} />{" "}
                </Link>
                );
            })}{" "}
            </div>
        {" "}
        </>
    );
    };

export default PlantDetail;