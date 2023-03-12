/*import React from 'react';

const Cart = ()=>{
    return(
        <h1 style={{color:"rgb(160, 12, 12)"}}>¡Proximamente podrás utilizar nuestro carrito de compras!</h1>
    );
};

export default Cart; */

import React, { useState } from "react";

// Firebase
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

import TextField from "@mui/material/TextField";
import MessageSuccess from "../../components/MessageSucess/MessageSuccess";

const styles = {
    containerShop: {
        textAlign: "center",
        paddingTop: 20,
    },
};

const initialState = {
    name: "",
    lastName: "",
    city: "",
};

const Shop = () => {
    const [values, setValues] = useState(initialState);
    const [purchaseID, setPurchaseID] = useState("");

    // console.log(purchaseID);

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        // Add a new document with a generated id.
        const docRef = await addDoc(collection(db, "purchases"), {
            values,
        });
        // console.log("Document written with ID: ", docRef.id);
        setPurchaseID(docRef.id);
        setValues(initialState);
    };

    return (
        <div style={styles.containerShop}>
            <h1>Shop</h1>
            <form className="FormContainer" onSubmit={handleOnSubmit}>
                <TextField
                    placeholder="Name"
                    style={{ margin: 10, width: 400 }}
                    name="name"
                    value={values.name}
                    onChange={handleOnChange}
                />
                <TextField
                    placeholder="Last Name"
                    style={{ margin: 10, width: 400 }}
                    name="lastName"
                    value={values.lastName}
                    onChange={handleOnChange}
                />
                <TextField
                    placeholder="City"
                    style={{ margin: 10, width: 400 }}
                    name="city"
                    value={values.city}
                    onChange={handleOnChange}
                />
                <button className="btnASendAction">Send</button>
            </form>
            {purchaseID ? <MessageSuccess purchaseID={purchaseID} /> : null}
        </div>
    );
};

export default Shop;
