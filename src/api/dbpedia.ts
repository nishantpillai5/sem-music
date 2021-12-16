import {
  allGenresQuery,
  allInstrumentsQuery,
  artistQueryBuilder,
} from "./helper";
import { SparqlEndpointFetcher } from "fetch-sparql-endpoint";
import {
  ArtistFormType,
  FetchDictionary,
  BaseFetchType,
  ArtistFetchType,
  DropdownFetchType,
} from "src/utils/types";

export async function dbpedia<T extends BaseFetchType>(query: string) {
  const fetcher = new SparqlEndpointFetcher();
  const bindingsStream = await fetcher.fetchBindings(
    "https://dbpedia.org/sparql",
    query
  );

  var results = new Promise<FetchDictionary<T>>(function (resolve, reject) {
    const dataDictionary: FetchDictionary<T> = {};
    bindingsStream.on("data", (bindings: T) => {
      dataDictionary[bindings.data.value] = bindings;
    });
    bindingsStream.on("end", () => resolve(dataDictionary));
  });
  return results;
}

export async function getAllInstruments() {
  return dbpedia<DropdownFetchType>(allInstrumentsQuery);
}

export async function getAllGenres() {
  return dbpedia<DropdownFetchType>(allGenresQuery);
}

export async function getArtists(form: ArtistFormType) {
  const query = artistQueryBuilder(form);
  return dbpedia<ArtistFetchType>(query);
}
