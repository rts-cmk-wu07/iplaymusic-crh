import { useState } from "react";
import Header from "../../components/Header";
import useSearchForItem from "../../features/search/hooks/useSearchForItem";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
import "../../tabs.css";
import SearchResultsAlbums from "../../features/search/components/SearchResultsAlbums";
import SearchResultsArtists from "../../features/search/components/SearchResultsArtists";
import SearchResultsTracks from "../../features/search/components/SearchResultsTracks";
import { IoSearchOutline } from "react-icons/io5";

function Search() {
  const [query, setQuery] = useState<string | null>(null);
  const { searchResults } = useSearchForItem(query);

  return (
    <>
      <Header showArrow />

      <div className="page-wrapper">
        <label className="flex items-center border-b-2 border-gray-300">
          <input
            autoFocus
            type="text"
            className="w-full p-1 outline-none dark:bg-secondary dark:text-white"
            placeholder="Search here"
            value={query ?? ""}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <IoSearchOutline className="mr-1 text-xl text-gray-400 " />
        </label>

        {query && (
          <Tabs className="mt-4">
            <TabList className="flex gap-2">
              <Tab>Albums</Tab>
              <Tab>Artists</Tab>
              <Tab>Tracks</Tab>
            </TabList>

            <TabPanel>
              <SearchResultsAlbums albums={searchResults?.albums} />
            </TabPanel>
            <TabPanel>
              <SearchResultsArtists artists={searchResults?.artists} />
            </TabPanel>
            <TabPanel>
              <SearchResultsTracks tracks={searchResults?.tracks} />
            </TabPanel>
          </Tabs>
        )}
      </div>
    </>
  );
}

export default Search;
