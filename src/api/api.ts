import React from "react";
import { SparqlEndpointFetcher } from "fetch-sparql-endpoint";
import { FetchType } from "src/utils/types";

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
