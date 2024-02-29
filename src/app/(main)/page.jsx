import { getClient } from "@/lib/graphql/client";
import MainBanner from "./components/banner/MainBanner";
import TracksRow from "./components/top-tracks/TracksRow";
import { GET_PLAYLISTS, GET_TRACKS } from "@/lib/graphql/querys";
import PlaylistList from "./components/playlist/PlaylistList";

export default async function Home() {
  const hotTracks = await getClient().query({
    query: GET_TRACKS,
    variables: { limit: 6, category: "hot-tracks" },
  });
  const newTracks = await getClient().query({
    query: GET_TRACKS,
    variables: { limit: 6, category: "new-tracks" },
  });
  const playlists = await getClient().query({
    query: GET_PLAYLISTS,
    variables: { limit: 6 },
  });

  return (
    <main className=" h-full">
      <TracksRow title={"Hot Tracks"} list={hotTracks.data.getTracks} />
      <MainBanner />
      <TracksRow title={"New Tracks"} list={newTracks.data.getTracks} />
      <PlaylistList title={"Playlists"} list={playlists.data.getPlaylists} />
    </main>
  );
}
