import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { PostsList } from "./components/PostsList";
import { postData } from "./posts";

export const App = () => {
  const [posts, setPosts] = useState(postData);

  return (
    <>
      <Header />
      <Container>
        <PostsList postsData={posts} />
      </Container>
      <Footer />
    </>
  );
};
