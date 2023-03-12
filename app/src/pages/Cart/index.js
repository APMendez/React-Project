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
                <div>Items in cart: {quantity}</div>
                <div>Total: ${totalPrice}</div>
                <button className="btnASendAction" type="submit">Send</button>
            </form>
            {purchaseID ? <MessageSuccess purchaseID={purchaseID} /> : null}
        </div>
    );
};

export default Cart;
