"use client";
import { useSession } from "next-auth/react";
import UnauthPage from "../components/unauth-page";
import { useContext } from "react";
import { GlobalContext } from "../context";
import ManageAccounts from "../components/manage-accounts/index";
import CommonLayout from "../components/common-layout/index";
import CircleLoader from "../components/circle-loader/index";
import { useEffect } from "react";
import {
  getPopularMedias,
  getTopratedMedias,
  getTrendingMedias,
} from "../utils/index";

export default function Browse() {
  useEffect(() => {
    async function getAllMedias() {
      const trendingTvShows = await getTrendingMedias("tv");
      const popularTvShows = await getPopularMedias("tv");
      const topratedTvShows = await getTopratedMedias("tv");
      const trendingMovieShows = await getTrendingMedias("movie");
      const popularMovieShows = await getPopularMedias("movie");
      const topratedMovieShows = await getTopratedMedias("movie");

      setMediaData([
        ...[
          {
            title: "Trending TV Shows",
            medias: trendingTvShows,
          },
          {
            title: "Popular TV Shows",
            medias: popularTvShows,
          },
          {
            title: "Top rated TV Shows",
            medias: topratedTvShows,
          },
        ].map((item) => ({
          ...item,
          medias: item.medias.map((mediaItem: any) => ({
            ...mediaItem,
            type: "tv",
          })),
        })),
        ...[
          {
            title: "Trending Movies",
            medias: trendingMovieShows,
          },
          {
            title: "Popular Movies",
            medias: popularMovieShows,
          },
          {
            title: "Top rated Movies",
            medias: topratedMovieShows,
          },
        ].map((item) => ({
          ...item,
          medias: item.medias.map((mediaItem: any) => ({
            ...mediaItem,
            type: "movie",
          })),
        })),
      ]);

      setPageLoader(false);
    }
    getAllMedias();
  }, []);

  const {
    loggedInAccount,
    mediaData,
    setMediaData,
    pageLoader,
    setPageLoader,
  } = useContext(GlobalContext);
  const { data: session } = useSession();

  if (session === null) {
    return <UnauthPage />;
  }

  if (loggedInAccount === null) {
    return <ManageAccounts />;
  }
  if (pageLoader) return <CircleLoader />;
  return (
    <main className="flex min-h-screen flex-col">
      <CommonLayout mediaData={mediaData} />
    </main>
  );
}
