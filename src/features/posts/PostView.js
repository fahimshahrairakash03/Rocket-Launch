import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

const PostView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div>
      {isLoading && <h3>Loading . . . </h3>}
      {error && <h3>{error}</h3>}
      {posts && posts.map((post) => <p>{post.mission_name}</p>)}
    </div>
  );
};

export default PostView;
