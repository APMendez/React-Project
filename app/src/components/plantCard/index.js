import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./styles.css";

const PlantCard = ({prods}) => {
    return(
        <div className="plantCardDiv">
            <Card sx={{ maxWidth: 345, m: 4 }}>
                <CardActionArea>
                    <CardMedia component="img" image={prods.img} alt="green iguana" />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {prods.nombre}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        ${prods.precio}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};
export default PlantCard;

