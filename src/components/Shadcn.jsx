import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import instance from "@/utils/axiosInstances";

export default function Shadcn() {
  const BASE_URL = "https://pokeapi.co/api/v2/";
  const [url, setUrl] = useState("/pokemon");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchbyaxios = async () => {
      try {
        setLoading(true);
        const data = await instance({
          url: url,
          method: "get",
        });
        console.log(data);
        setData(data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    //     const fetchdata= async ()=>{
    //       try{
    //         setLoading(true);
    //         const data= await fetch(url);
    //         const res= await data.json();
    //         setLoading(false);
    //         setData(res);

    //       }
    //       catch(e){
    // console.log(e);
    //       }

    //     }
    // setLoading(true);
    // setError(null);

    // fetch(url)
    //   .then((data) => data.json())
    //   .then((json) => {
    //     setData(json);
    //     setLoading(false);
    //   })
    //   .catch(() => {
    //     setError("Something went wrong");
    //     setLoading(false);
    //   });
    fetchbyaxios();
  }, [url]);

  console.log(url);

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
