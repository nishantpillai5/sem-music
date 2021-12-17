export type SongType = {
  title: string;
};

export type AlbumType = {
  title: string;
};

export type ArtistType = {
  title: string;
};

export type FetchDictionary<T> = { [link: string]: T };

export type BaseFetchType = {
  data: {
    termType: string;
    value: string;
  };
};

export type DropdownFetchType = BaseFetchType & {
  label: {
    termType: string;
    value: string;
  };
};

export type DropdownDictFetchType = FetchDictionary<DropdownFetchType>;

export type ArtistFetchType = BaseFetchType & {
  label: {
    termType: string;
    value: string;
  };
  startYear: {
    termType: string;
    value: string;
  };
  endYear: {
    termType: string;
    value: string;
  };
  url: {
    termType: string;
    value: string;
  };
  comment: {
    termType: string;
    value: string;
  };
  genres: {
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
  id: string;
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
  startYear: string;
  endYear: string;
  yearEnabled: boolean;
};

export type AlbumFormType = {
  title: string;
};

export type SongFormType = {
  title: string;
};
