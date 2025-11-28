import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function () {
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
      .catch(() => {
        setError("Something went wrong");
        setLoading(false);
      });
  }, [url]);

  return (
    <div className="max-w-3x1 mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">fetch data</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="mb-4 flex gap-2">
            <Button
              variant="outline"
              onClick={() => setUrl(data?.previous)}
              disabled={!data?.previous || loading}
            >
              Previous
            </Button>

            <Button
              variant="outline"
              onClick={() => setUrl(data?.next)}
              disabled={!data?.next || loading}
            >
              Next
            </Button>

            <Button
              variant="outline"
              onClick={() => setUrl(BASE_URL)}
              disabled={url === BASE_URL}
              className="ml-auto"
            >
              Reset
            </Button>
          </div>

          {!loading && !error && data && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.results.map((item) => (
                <li
                  key={item.name}
                  className="p-3 border rounded text-sm flex items-center justify-between"
                >
                  <span className="capitalize">
                    {item.name.replace("-", " ")}
                  </span>
                
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
