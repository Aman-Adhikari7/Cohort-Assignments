import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const RandomUser = () => {
  const [page, setPage] = useState(1);
  const [result, setresult] = useState([]);

  const fetchuser = async () => {
    const response = await axios.get(
      `https://randomuser.me/api/?page=${page}&results=5`
    );
    setresult((prevuser)=>[...prevuser,...response.data.results]);
    console.log(response.data.results[0].name.first);
    console.log(response.data.results[0].picture.thumbnail);
  };

  useEffect(() => {
    fetchuser();
  }, [page]);

  return (
    <div className="grid grid-cols-5 items-center gap-4  ">
      {result.map((user, index) => (
        <div key={index} className="text-center rounded-lg shadow-lg mx-2 my-2 px-8 py-8 flex-col items-center justify-center ">
          <img className="h-10 rounded-full mx-auto "
            src={user.picture.thumbnail}
            alt={`${user.name.first}'s avatar`}
          />
          <h1>{user.name.first}</h1>
        </div>
      ))}

      <button
        onClick={() => {
          setPage((page)=>page+1);
        }}
      >
        Load more
      </button>
    </div>
  );
};

export default RandomUser;
