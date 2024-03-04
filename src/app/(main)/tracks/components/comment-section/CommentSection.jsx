"use client";

import useAuthClient from "@/hooks/useAuthClient";
import { CREATE_COMMENT } from "@/lib/graphql/mutation";
import { GET_COMMENTS } from "@/lib/graphql/querys";
import { useLazyQuery, useMutation } from "@apollo/client";
import {
  Alert,
  Avatar,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

function CommentSection({ trackId }) {
  const { userData } = useAuthClient();
  const [text, setText] = useState("");

  const [sendComment, { data, loading, error }] = useMutation(CREATE_COMMENT, {
    variables: { trackId, text },
  });

  const [
    getComments,
    { data: commentsData, loading: commentsLoading, error: commentsError },
  ] = useLazyQuery(GET_COMMENTS, { variables: { trackId } });

  useEffect(() => {
    getComments();
    setText("");
  }, [data]);

  const onSubmit = () => {
    if (text.length > 0) sendComment();
  };

  return (
    <>
      <Typography variant="h6" component={"h2"}>
        Comments
      </Typography>
      {data && (
        <Alert sx={{ marginY: 1 }} severity="success">
          Your comment will be registered soon
        </Alert>
      )}
      {error && (
        <Alert sx={{ marginY: 1 }} severity="error">
          {error.message}.
        </Alert>
      )}
      {loading && (
        <Alert sx={{ marginY: 1 }} severity="info">
          Comment is being submitted...
        </Alert>
      )}

      {userData && (
        <Box sx={{ display: "flex", gap: 2, marginY: 2 }}>
          <TextField
            label={"Enter your comment"}
            fullWidth
            onChange={(e) => setText(e.target.value)}
          />
          <Button onClick={onSubmit} variant="contained">
            Comment
          </Button>
        </Box>
      )}

      {commentsLoading && (
        <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
          <CircularProgress color="success" />
        </Box>
      )}

      <Box>
        {commentsData?.getComments?.map((comment) => (
          <Box
            key={comment.id}
            sx={{
              padding: 2,
              backgroundColor: "#111111",
              transition: "0.5s",
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
              gap: 2,
              marginBottom: 2,
              ":hover": { backgroundColor: "#212121" },
            }}
          >
            <Avatar />
            <Box>
              <Typography variant="h6" component={"h4"}>
                {comment.text}
              </Typography>
              <Typography variant="p" component={"p"} color={"text.secondary"}>
                {comment.userId.username}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default CommentSection;
