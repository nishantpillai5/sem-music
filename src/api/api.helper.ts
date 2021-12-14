import Axios from "axios";

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
