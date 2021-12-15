import { ArtistApiType } from "src/utils/types";
import { axios } from "./helper";

export async function get_artist_info(id: string) {
  const { data, status } = await axios.get(`/artist/${id}?inc=release-groups`);
  const artist: ArtistApiType = {
    id: data["id"],
    name: data["name"],
    country: data["country"],
    lifeSpan: data["life-span"],
    disambiguation: data["disambiguation"],
    releaseGroupList: data["release-groups"],
  };
  return artist;
}

export async function get_album_info(id: string) {
  const { data, status } = await axios.get(`/release-group/${id}`);
  console.log(data);
  return data;
}
