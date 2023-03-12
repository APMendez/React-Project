import React, { useState, useContext } from "react";
//Context
import { CartContext } from "../../context/cartContext";
// Firebase
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
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
    city: ""
};

const Cart = () => {
    const [values, setValues] = useState(initialState);
    const [purchaseID, setPurchaseID] = useState("");

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, "purchases"), {
            values, quantity: {quantity}, total:{totalPrice}
        });
        setPurchaseID(docRef.id);
        setValues(initialState);
    };
    const clearData = () => {
        cart.length=0
    }

    const [cart, setCart] = useContext(CartContext);

    const quantity = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);

    const totalPrice = cart.reduce(
        (acc, curr) => acc + curr.quantity * curr.precio,
        0
    );

    return (
        <div style={styles.containerShop}>
            <h1>Carrito de compras</h1>
            <form className="FormContainer" onSubmit={handleOnSubmit} style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <TextField
                    placeholder="Nombre"
                    style={{ margin: 10, width: 400 }}
                    name="name"
                    value={values.name}
                    onChange={handleOnChange}
                />
                <TextField
                    placeholder="Apellido"
                    style={{ margin: 10, width: 400 }}
                    name="lastName"
                    value={values.lastName}
                    onChange={handleOnChange}
                />
                <TextField
                    placeholder="Direccion"
                    style={{ margin: 10, width: 400 }}
                    name="city"
                    value={values.city}
                    onChange={handleOnChange}
                />
                <div style={{margin:15}}>Cantidad de items: {quantity}</div>
                <div style={{margin:15}}>Total: ${totalPrice}</div>
                <button className="btnASendAction" onClick={clearData} style={{margin:15, padding:8}}>Confirmar compra</button>
            </form>
            {purchaseID ? <MessageSuccess purchaseID={purchaseID} /> : null}
        </div>
    );
};

export default Cart;
