"use client";
import { useSession } from "next-auth/react";
import { createContext, useEffect, useState, FC } from "react";
import CircleLoader from "../components/circle-loader/index";
export const GlobalContext = createContext<any>({});
export default function GlobalState({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loggedInAccount, setLoggedInAccount] = useState<{}>({});
  const [accounts, setAccounts] = useState<{}>([]);
  const [pageLoader, setPageLoader] = useState<boolean>(true);
  const [mediaData, setMediaData] = useState<{}>([]);
  const [searchResults, setSearchResults] = useState<{}>([]);
  const [similarMedias, setSimilarMedias] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [mediaDetails, setMediaDetails] = useState(null);
  const [currentMediaInfoIdAndType, setCurrentMediaInfoIdAndType] =
    useState(null);
  const [showDetailsPopup, setShowDetailsPopup] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const data = sessionStorage.getItem("loggedAcocunt");
    let output = {};
    if (data) {
      output = JSON.parse(data);
    }
    setLoggedInAccount(output);
    // if (sessionStorage.getItem("loggedAcocunt")) {
    //   setLoggedInAccount(JSON.parse(sessionStorage.getItem("loggedAccount")));
    // }
  }, []);
  if (session === undefined) {
    return <CircleLoader></CircleLoader>;
  }
  return (
    <GlobalContext.Provider
      value={{
        loggedInAccount,
        setLoggedInAccount,
        accounts,
        setAccounts,
        pageLoader,
        setPageLoader,
        mediaData,
        setMediaData,
        searchResults,
        setSearchResults,
        currentMediaInfoIdAndType,
        setCurrentMediaInfoIdAndType,
        showDetailsPopup,
        setShowDetailsPopup,
        mediaDetails,
        setMediaDetails,
        similarMedias,
        setSimilarMedias,
        favorites,
        setFavorites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
