import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from "react-router-dom"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default function PostPage() {
  const [post, setPost] = useState([]);
  const [user, setUser] = useState([]);
  const { id } = useParams()
  const classes = useStyles();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/'+id)
    .then(response => response.json())
    .then(data => {
      setPost( data )

      get_user(data.userId)
    })
    .catch((e) => {
      console.log(e);
    });
  },[]);

  const get_user =(user_id)=>{
    fetch('https://jsonplaceholder.typicode.com/users/'+user_id)
      .then(response => response.json())
      .then(data => {
        setUser( data )
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div>
        <h1>Post</h1>
      <Card className={classes.root}>
      <CardContent>
        <h2>{post.title}</h2>
        <h2>{post.body}</h2>
        <h4> Created by: {user.username}</h4>

      </CardContent>
    </Card>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
