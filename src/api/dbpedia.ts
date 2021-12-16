import {
  allGenresQuery,
  allInstrumentsQuery,
  brainz_url_query,
} from "./helper";
import { SparqlEndpointFetcher } from "fetch-sparql-endpoint";
import { FetchDictionary, FetchType } from "src/utils/types";

export async function dbpedia(query: string) {
  const fetcher = new SparqlEndpointFetcher();
  const bindingsStream = await fetcher.fetchBindings(
    "https://dbpedia.org/sparql",
    query
  );

  var results = new Promise<FetchDictionary>(function (resolve, reject) {
    const dataDictionary: FetchDictionary = {};
    bindingsStream.on("data", (bindings: FetchType) => {
      dataDictionary[bindings.data.value] = bindings.label.value;
    });
    bindingsStream.on("end", () => resolve(dataDictionary));
  });
  return results;
}

export const convert_url = async (dbpediaURL: string) => {
  const brainz_url = await dbpedia(brainz_url_query(dbpediaURL));
  console.log(brainz_url);
};

export async function getAllInstruments() {
  return dbpedia(allInstrumentsQuery);
}

export async function getAllGenres() {
  return dbpedia(allGenresQuery);
}
