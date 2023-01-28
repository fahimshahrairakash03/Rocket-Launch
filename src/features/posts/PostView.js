import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";
import { Card } from "antd";
import { Col, Divider, Row } from "antd";
import { Button, Space } from "antd";

const PostView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  console.log(posts);
  return (
    <div>
      {isLoading && <h3>Loading . . . </h3>}
      {error && <h3>{error}</h3>}

      <Row justify="start">
        <Col span={4}>
          <div>
            {posts &&
              posts.map((post) => (
                <div className="site-card-border-less-wrapper">
                  <Card
                    title={post.mission_name}
                    bordered={false}
                    style={{
                      width: 300,
                    }}
                  >
                    <p>Details: {post.details}</p>
                    <p>Launch Date: {post.launch_date_local}</p>
                    <Button type="primary">Details</Button>
                  </Card>
                </div>
              ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PostView;
