function SearchResultsArtists({ artists }: { artists: any }) {
  return (
    <div className="mt-4 text-xs dark:text-white ">
      {artists?.items?.map((artist: any) => (
        <div
          key={artist.id}
          className="flex items-center gap-3 py-2 border-b-[1px] border-white"
        >
          <img
            src={
              artist.images[2]?.url ||
              artist.images[1]?.url ||
              artist.images[0]?.url ||
              "https://images.unsplash.com/photo-1586672806791-3a67d24186c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            }
            alt={artist.name}
            className="w-10 h-10"
          />
          <div>
            <p className="font-semibold">{artist.name}</p>
            <p className="font-light">{artist.followers.total} followers</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResultsArtists;
