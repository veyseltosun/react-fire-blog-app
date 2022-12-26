import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";



export default function BlogCard({setFavored, favored}) {
    const handleFavored = () => {

        setFavored((prev) => !prev);
    };
    
    const style = {
        color: "red",
    }
    const style2 = {
        color: "blue"
    }

    return (
        <Card sx={{ maxWidth: 345, margin: 10, backgroundColor: "rgba(75, 75, 75, .3)" }}>
            <img width="300px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" />
            <CardHeader
                title={
                    "JavaScript"}
                subheader={"November, 1996"}
                sx={{ color: blue[800], fontSize: "60px", fontWeight: "medium" }}
            />

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {"JavaScript [10] (genellikle JS olarak kısaltılır), HTML ve CSS ile birlikte World Wide Web'in temel teknolojilerinden biri olan programlama dilidir ..."}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={handleFavored}>
                    <FavoriteIcon
                        sx={

                            favored ? style : style2
                        } />
                </IconButton>
                <IconButton aria-label="comment">
                    <ChatBubbleOutlineIcon />
                </IconButton>
            </CardActions>

        </Card>
    );
}