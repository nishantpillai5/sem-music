export type SongType = {
  title: string;
};

export type AlbumType = {
  title: string;
};

export type ArtistType = {
  title: string;
};

export type FetchDictionary = { [link: string]: string };

export type FetchType = {
  data: {
    termType: string;
    value: string;
  };
  label: {
    termType: string;
    value: string;
  };
};

export type ArtistApiType = {
  id: string;
  name: string;
  country: string;
  disambiguation: string;
  lifeSpan: { begin: string };
  releaseGroupList: AlbumApiType[];
};

export type AlbumApiType = {
  title: string;
  "first-release-date": string;
};

export type ArtistFormType = {
  type: string;
  typeEnabled: boolean;
  instrument: string;
  instrumentEnabled: boolean;
  genre: string;
  genreEnabled: boolean;
  year: string;
  yearEnabled: boolean;
};

export type AlbumFormType = {
  title: string;
};

export type SongFormType = {
  title: string;
};
