import * as React from "react";
//MUI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
//Components
import MuiAccordion from "../muiAccordion";

export default function DetailCard({prod}) {
    return (
        <Card sx={{ maxWidth: 700 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={prod.img}
                    alt="{prod.nombre}"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {prod.nombre}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        Precio: ${prod.precio}
                    </Typography>
                    <MuiAccordion descripcion={prod.descripcion} cuidados= {prod.cuidados} />
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions>
        </Card>
    )
};
