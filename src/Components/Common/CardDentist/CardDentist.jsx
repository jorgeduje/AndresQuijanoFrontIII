import React from "react";

import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { Button } from "@mui/material";



const CardDentist = ({ odontologist, dispatch, favs }) => {
  const ColoresStar = (favs.some(fav => fav.id === odontologist.id) ? {color: "#ffcc00"} : {color: "grey"})
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          action={
            <IconButton aria-label="add to favorites" onClick={()=>dispatch({type: "FAVORITES", payload: odontologist})}>
              <StarIcon sx={ColoresStar} />
            </IconButton>
          }
          title={odontologist.name}
          subheader={"Website: " + odontologist.website}
        />
        <CardMedia
          component="img"
          height="194"
          image="https://res.cloudinary.com/dm8kbjyi2/image/upload/v1680973180/shutterstock_200885516_faaad9.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            E-mail: {odontologist.email}<br />
            Phone number: {odontologist.phone}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Link to={`/dentist/${odontologist.id}`}>
            <Button variant="outlined" startIcon={<ControlPointIcon />}>
              More info
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardDentist;
