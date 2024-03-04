"use client";
import useAuthClient from "@/hooks/useAuthClient";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useMutation } from "@apollo/client";
import { LIKE_DISLIKE } from "@/lib/graphql/mutation";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function LikeAndDislike({ likers, trackId }) {
  const router = useRouter();
  const { userData } = useAuthClient();
  const [isLiked, setIsLiked] = useState(false);

  const [send, { data, loading, error }] = useMutation(LIKE_DISLIKE, {
    variables: { id: trackId },
  });

  useEffect(() => {
    const findIndexOfId = likers.findIndex(
      (item) => item.id == userData?.data?.whoIAm?.id
    );
    setIsLiked(findIndexOfId !== -1 ? true : false);
  }, [data, userData, likers]);

  useEffect(() => {
    if (data) router.refresh();
  }, [data]);

  const clickHandler = () => {
    send();
  };

  if (loading)
    return (
      <>
        <CircularProgress color="success" />
      </>
    );

  return (
    <>
      {userData?.data && (
        <button onClick={clickHandler}>
          {isLiked ? (
            <FavoriteIcon fontSize="large" />
          ) : (
            <FavoriteBorderIcon fontSize="large" />
          )}
        </button>
      )}
    </>
  );
}

export default LikeAndDislike;
