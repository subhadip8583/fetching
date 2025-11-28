import React, { useEffect, useState } from "react";

export default function AbilityList() {
  const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
  const [url, setUrl] = useState(BASE_URL);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  

  useEffect(() => {
    
    setLoading(true);
    setError(null);

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError("Something went wrong");
        setLoading(false);
      });
  }, [url]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">fetch data</h1>

      

      {/* Pagination Buttons */}
      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setUrl(data.previous)}
          disabled={!data?.previous || loading}
          className="px-3 py-1 rounded border disabled:opacity-50"
        >
          Previous
        </button>

        <button
          onClick={() => setUrl(data.next)}
          disabled={!data?.next || loading}
          className="px-3 py-1 rounded border disabled:opacity-50"
        >
          Next
        </button>

        <button
          onClick={() => setUrl(BASE_URL)}
          disabled={url === BASE_URL}
          className="px-3 py-1 rounded border ml-auto"
        >
          Reset
        </button>
      </div>

      {/* Loading State */}
      {loading && <div className="text-gray-600 py-4">Loading...</div>}

      {/* Error State */}
      {error && <div className="text-red-600 py-4">{error}</div>}

      {/* Results */}
      {!loading && !error && data && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {data.results.map((item) => (
            <li
              key={item.name}
              className="p-3 bg-white rounded shadow-sm flex items-center justify-between"
            >
              <span className="capitalize">{item.name.replace("-", " ")}</span>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-blue-600 underline"
              >
                Details
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
