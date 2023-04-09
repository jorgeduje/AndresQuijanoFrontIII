import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CardFav = ({ favs, odontologist }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://res.cloudinary.com/dm8kbjyi2/image/upload/v1680973180/shutterstock_200885516_faaad9.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {favs.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            E-mail: {favs.email}
            <br />
            Phone number: {favs.phone}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="outlined">Contact</Button>
          
        </CardActions>
      </Card>
    </div>
  );
};

export default CardFav;
