"use client";
import useAuthClient from "@/hooks/useAuthClient";
import { DELETE_FROM_PLAYLIST } from "@/lib/graphql/mutation";
import { useMutation } from "@apollo/client";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import { Backdrop, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function RemoveFromPlaylist({ playlist, track }) {
  const router = useRouter();
  const { userData } = useAuthClient();
  const [deleteTrack, { data, loading, error }] = useMutation(
    DELETE_FROM_PLAYLIST,
    {
      variables: { playlistId: playlist.id, trackId: track.id },
    }
  );

  useEffect(() => {
    if (data) router.refresh();
  }, [data]);

  const deleteHandler = () => {
    deleteTrack();
  };

  return (
    <>
      {playlist.userId.id == userData?.data?.whoIAm.id && (
        <div className=" cursor-pointer" onClick={deleteHandler}>
          <DeleteSweepIcon fontSize="large" />
        </div>
      )}

      <Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="success" />
      </Backdrop>
    </>
  );
}

export default RemoveFromPlaylist;
