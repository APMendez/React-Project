import React, {useContext} from "react";
import { Link } from "react-router-dom";
//MUI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
//Context
import { CartContext } from "../../context/cartContext";
//Style
import "./styles.css";

const PlantCard = ({img, nombre, precio, id }) => {
    const quantity=0
    const [cart, setCart] = useContext(CartContext);
    const addToCart = () => {
        setCart((currItems) => {
            const isItemsFound = currItems.find((prod) => prod.id === id);
            if (isItemsFound) {
                return currItems.map((prod) => {
                    if (prod.id === id) {
                        return { ...prod, quantity: prod.quantity + 1 };
                    } else {
                        return prod;
                    }
                });
            } else {
                return [...currItems, {id, quantity: 1, precio }];
            }
        });
    };

    const removeItem = (id) => {
        setCart((currItems) => {
            if ((currItems.find((item) => item.id === id)).quantity === 1) {
                return (currItems.filter((item) => item.id !== id));
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    const getQuantityById = (id) => {
        return cart.find((item) => item.id === id)? quantity : 0;
    };

    const quantityPerItem = getQuantityById(id);

    return (
        <div className="plantCardDiv">
            <Card sx={{ maxWidth: 345, m: 4 }}>
                <CardActionArea>
                        <CardMedia
                            component="img"
                            image={img}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {nombre}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Precio: ${precio}
                            </Typography>
                        </CardContent>
                    {quantityPerItem === 0 ? (
                        <button
                            className="item-add-button"
                            onClick={() => addToCart()}
                            style={{zIndex:10000, padding:8, margin:15}}
                            type="button"
                        >
                            Añadir al carrito
                        </button>
                    ) : (
                        <button
                            className="item-plus-button"
                            onClick={() => addToCart()}
                            style={{zIndex:100000}}
                            type="button"
                        >
                            + Añadir otra unidad
                        </button>
                    )}

                    {quantityPerItem > 0 && (
                        <button
                            className="item-minus-button"
                            onClick={() => removeItem(id)}
                            style={{zIndex:10000}}
                            type="button"
                        >
                            Eliminar del carrito
                        </button>
                    )}
                </CardActionArea>
            </Card>
        </div>
    );
};


export default PlantCard;