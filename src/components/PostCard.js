import React, { useState } from 'react';
import { useHistory } from "react-router-dom"

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import postImg from '../post.jpg'

export default function PostCard(props) {
  const classes = useStyles();
  const [post, setPost] = useState(props);


  let history = useHistory(),
  redirect = () =>{
    history.push("/posts/"+post.post.id)
  }

  return (
    <Card className={classes.root}>
      <CardActionArea
      onClick={redirect}
      >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            U
          </Avatar>
        }
        title={post.post.title}
      />
       <CardMedia
        className={classes.media}
        image={postImg}
        title="Paella dish"
      />

      </CardActionArea>
    </Card>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: '#91cfe3',
    border: 2,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },

  avatar: {
    backgroundColor: "#0b818c",
  },
}));