import { getClient } from "@/lib/graphql/client";
import MainBanner from "./components/banner/MainBanner";
import TracksRow from "./components/top-tracks/TracksRow";
import { GET_HOT_TRACKS, GET_NEW_TRACK } from "@/lib/graphql/querys";

export default async function Home() {
  const hotTracks = await getClient().query({ query: GET_HOT_TRACKS });
  const newTracks = await getClient().query({ query: GET_NEW_TRACK });
  return (
    <main className=" h-full">
      <TracksRow title={"Hot Tracks"} list={hotTracks.data.getTracks} />
      <MainBanner />
      <TracksRow title={"New Tracks"} list={newTracks.data.getTracks} />
    </main>
  );
}
