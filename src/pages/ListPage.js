import React, { useState, useEffect } from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import GridList from '@material-ui/core/GridList';
import { makeStyles } from '@material-ui/core/styles';
import PostCard from '../components/PostCard'

export default function ListPage() {
  const [posts, setPosts] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      setPosts( data )

    })
    .catch((e) => {
      console.log(e);
    });
  },[]);



  return (
    <div>
      <h1>Posts</h1>
       <GridList className={classes.root} cols={4}>
          {posts.map((post) => (
            <GridListTile key={post.id} >
                <PostCard post={post} key={post.id} userId={post.userId}  />
            </GridListTile>
          ))}
        </GridList>

    </div>
  );
}

const useStyles = makeStyles({

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-',
    overflow: 'hidden',

  },
});