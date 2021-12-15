import { brainz_url_query } from "./helper";
import { SparqlEndpointFetcher } from "fetch-sparql-endpoint";
import { FetchType } from "src/utils/types";

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

export const convert_url = async (dbpediaURL: string) => {
  const brainz_url = await dbpedia(brainz_url_query(dbpediaURL));
  console.log(brainz_url);
};

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
