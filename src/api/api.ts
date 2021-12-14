import React from "react";
import { SparqlEndpointFetcher } from "fetch-sparql-endpoint";
import { ArtistApiType, FetchType } from "src/utils/types";
import { axios, brainz_url_query } from "./api.helper";

export const convert_url = async (dbpediaURL: string) => {
  const brainz_url = await dbpedia(brainz_url_query(dbpediaURL));
  console.log(brainz_url);
};

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

export async function dbpedia(query: string) {
  const fetcher = new SparqlEndpointFetcher();
  const bindingsStream = await fetcher.fetchBindings(
    "https://dbpedia.org/sparql",
    query
  );

  var results = new Promise<string[]>(function (resolve, reject) {
    const data: string[] = [];
    bindingsStream.on("data", (bindings: FetchType) => {
      data.push(bindings.fetch.value);
    });
    bindingsStream.on("end", () => resolve(data));
  });

  return results;
}

export async function call_api(
  list: any[],
  set_function: React.Dispatch<React.SetStateAction<any[]>>
) {
  const fetcher = new SparqlEndpointFetcher();

  const bindingsStream = await fetcher.fetchBindings(
    "https://dbpedia.org/sparql",
    `SELECT * WHERE {  
      ?fetch dbo:birthPlace dbr:Jönköping;
              a dbo:MusicalArtist.
    } LIMIT 100`
  );

  const data: string[] = [];

  bindingsStream.on("data", (bindings: FetchType) => {
    data.push(bindings.fetch.value);
  });

  bindingsStream.on("end", () => {
    set_function(data);
  });
}
