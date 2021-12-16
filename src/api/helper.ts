import Axios from "axios";
import { ArtistFormType } from "src/utils/types";

export const axios = Axios.create({
  baseURL: "https://musicbrainz.org/ws/2/",
});

export const artistQueryBuilder = (form: ArtistFormType) => {
  const query = `
  SELECT DISTINCT ?data ?label ?startYear ?endYear ?url ?comment WHERE {
    ${
      form.typeEnabled
        ? `?data rdf:type ${form.type === "Band" ? "dbo:Band" : "foaf:Person"}.`
        : ""
    }
    ?data dbo:genre ${form.genreEnabled ? `<${form.genre}>` : "?genre"}.
    ?data foaf:name ?label.
    ?data dbo:activeYearsStartYear ?startYear.
    ?data owl:sameAs ?url.
    ?data rdfs:comment ?comment.
    OPTIONAL {?data dbo:activeYearsEndYear ?endYear.}
    ${
      form.instrumentEnabled ? `?data dbo:instrument <${form.instrument}>.` : ""
    }
    ${
      form.yearEnabled
        ? `FILTER (?startYear >= "${
            form.startYear
          }"^^<http://www.w3.org/2001/XMLSchema#gYear> ${
            form.endYear
              ? `&& ?startYear <= "${form.endYear}"^^<http://www.w3.org/2001/XMLSchema#gYear>`
              : `&& ?startYear <= "${(
                  parseInt(form.startYear) + 20
                ).toString()}"^^<http://www.w3.org/2001/XMLSchema#gYear>`
          })`
        : ""
    }
      FILTER REGEX(?url,"^http://musicbrainz.org")
      FILTER (langMatches(lang(?comment), "EN" ))

}
GROUP BY ?data ?label ?startYear ?endYear ?url ?comment
LIMIT 100
`;
  return query;
};

export const albumQueryBuilder = (form: string) => {
  return "query";
};

export const songQueryBuilder = (form: string) => {
  return "query";
};

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
