import Axios from "axios";
import { ArtistFormType } from "src/utils/types";

export const axios = Axios.create({
  baseURL: "https://musicbrainz.org/ws/2/",
});

export const genre_query = `
SELECT DISTINCT ?genre WHERE {  
    {  ?fetch a dbo:Band;
                dbo:genre ?genre.}
UNION
 {  ?fetch a dbo:Musical_Artist;
                dbo:genre ?genre.}
    } ORDER BY ?genre
`;

export const brainz_url_query = (dbpediaURL: string) => `
SELECT DISTINCT ?same WHERE {  
     <${dbpediaURL}> owl:sameAs ?same.
      FILTER REGEX(?same,"^http://musicbrainz.org").
}
 
`;

export const artistQueryBuilder = (form: ArtistFormType) => {
  const query = `
  SELECT DISTINCT ?band ?bandname ?year (SAMPLE(?img) as ?picture) where {
    ${
      form.typeEnabled
        ? `?band rdf:type ${form.type === "Band" ? "dbo:Band" : "foaf:Person"}`
        : ""
    }
    ?band dbo:genre ${form.genreEnabled ? form.genre : "?genre"}.
    ?band foaf:name ?bandname .
    ?band dbp:yearsActive ?year .
  OPTIONAL {
    ?band foaf:depiction ?img .
    }
    ${
      form.yearEnabled
        ? `FILTER (?year >= ${form.year} && ?year <= ${form.year})`
        : ""
    }
}
GROUP BY ?band ?bandname ?year 
`;
  return query;
};

export const albumQueryBuilder = (form: string) => {
  return "query";
};

export const songQueryBuilder = (form: string) => {
  return "query";
};

export const prefixes = `
PREFIX dbo: <http://dbpedia.org/ontology/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
`;

export const allInstrumentsQuery = `
SELECT DISTINCT ?data ?label WHERE {
  ?person a dbo:MusicalArtist.
  ?person dbo:instrument ?data.
  ?data rdfs:label ?label.
  FILTER (langMatches(lang(?label), "EN" ))
}
`;

export const allGenresQuery = `SELECT DISTINCT ?data ?label WHERE {
  {?person rdf:type dbo:Band.
  ?person dbo:genre ?data.
  ?data rdfs:label ?label.
  FILTER (langMatches(lang(?label), "EN" ))}
UNION
{?person rdf:type dbo:MusicalArtist.
  ?person dbo:genre ?data.
  ?data rdfs:label ?label.
  FILTER (langMatches(lang(?label), "EN" ))}
}
`;
