import React from 'react';
import Post from './Post/Post';
import { MainContainer, Heading, Image, Toolbar, Profile, UserName, BrandContainer, SmMargin, Purple, ActionDiv } from './styles';

const Posts = () => {
  return (
    <>
      <h1>POSTS</h1>
      <Post />
      <Post />
    </>
  )
}

export default Posts;