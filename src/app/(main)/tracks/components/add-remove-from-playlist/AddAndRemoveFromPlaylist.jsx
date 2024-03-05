"use client";
import useAuthClient from "@/hooks/useAuthClient";
import { GET_ALL_PLAYLISTS } from "@/lib/graphql/querys";
import { useMutation, useQuery } from "@apollo/client";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import AlbumIcon from "@mui/icons-material/Album";
import { useEffect, useState } from "react";
import { ADD_TO_PLAYLIST } from "@/lib/graphql/mutation";
import { Backdrop, CircularProgress, Snackbar } from "@mui/material";
import { useRouter } from "next/navigation";
import { revalidateRouteAction } from "@/app/actions";

function AddAndRemoveFromPlaylist({ trackId }) {
  const router = useRouter();
  const { userData } = useAuthClient();
  const [myPlaylists, setMyPlaylists] = useState(null);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [showMyPlaylists, setShowMyPlaylists] = useState(false);

  const {
    data: playlists,
    loading: playlistsLoading,
    error: playlistsError,
  } = useQuery(GET_ALL_PLAYLISTS);

  const [addToPlaylist, { data, loading, error }] = useMutation(
    ADD_TO_PLAYLIST,
    {
      variables: { trackId, playlistId: selectedPlaylist?.id },
    }
  );

  useEffect(() => {
    const myPlayListsFilter = playlists?.getPlaylists.filter(
      (item) => item.userId.id == userData?.data?.whoIAm.id
    );

    setMyPlaylists(myPlayListsFilter);
  }, [playlists, userData]);

  useEffect(() => {
    if (data) {
      revalidateRouteAction(`/playlists/${selectedPlaylist?.slug}`);
      router.push(`/playlists/${selectedPlaylist?.slug}`);
    }
  }, [data]);

  const clickHandler = (data) => {
    setSelectedPlaylist(data);
  };

  const sendRequest = () => {
    addToPlaylist();
    setShowMyPlaylists(false);
  };

  return (
    <>
      <button onClick={() => setShowMyPlaylists(true)}>
        <PlaylistAddIcon fontSize="large" color={error ? "error" : "action"} />
      </button>

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={!!error}
        color="error"
        message={error?.message}
        key={"aaa"}
      />

      {myPlaylists && showMyPlaylists && (
        <div className=" fixed top-0 left-0 w-full h-screen flex justify-end backdrop-blur-sm py-20 z-50">
          <div
            className={
              " bg-black p-4 rounded-ss-md rounded-bl-md border border-r-0 overflow-y-auto"
            }
          >
            <div className=" flex justify-between">
              <h1 className=" mr-11">My Playlists</h1>
              <button onClick={() => setShowMyPlaylists(false)}>Close</button>
            </div>
            <div className=" p-2">
              {myPlaylists?.map((item, index) => (
                <div
                  key={index}
                  onClick={() => clickHandler({ id: item.id, slug: item.slug })}
                  className=" flex justify-between p-2 hover:bg-neutral-900 rounded-md cursor-pointer"
                >
                  <div className=" flex  items-center gap-2">
                    <AlbumIcon fontSize="large" />
                    <p>{item.name}</p>
                  </div>
                  {selectedPlaylist?.id === item.id && (
                    <button
                      onClick={sendRequest}
                      className=" p-1 rounded-md bg-white text-black text-sm"
                    >
                      Add
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
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

export default AddAndRemoveFromPlaylist;
