import { ArtistApiType } from "src/utils/types";
import { axios } from "./helper";

function parseURL(url: string) {
  const array = url.split("/");
  const id = array[array.length - 1];
  return id;
}

export async function getArtistInfo(url: string) {
  const id = parseURL(url);
  const { data } = await axios.get(`/artist/${id}?inc=release-groups`);
  console.log(data);
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

export async function getAlbumInfo(id: string) {
  const { data } = await axios.get(`/release-group/${id}`);
  console.log(data);
  return data;
}
