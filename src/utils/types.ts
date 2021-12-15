import { string } from "yargs";

export type SongType = {
  title: string;
};

export type AlbumType = {
  title: string;
};

export type ArtistType = {
  title: string;
};

export type FetchType = {
  fetch: {
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
  title: string;
};

export type AlbumFormType = {
  title: string;
};

export type SongFormType = {
  title: string;
};
