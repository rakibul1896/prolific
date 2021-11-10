import React, { useEffect, useState } from "react";
import axios from "axios";

const user = axios.get("https://jsonplaceholder.typicode.com/users");
const album = axios.get("https://jsonplaceholder.typicode.com/albums");

const Info = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [albumDetails, setAlbumDetails] = useState([]);
  useEffect(() => {
    axios
      .all([user, album])
      .then(
        axios.spread((...responses) => {
          const user = responses[0].data;
          const album = responses[1].data;
          setUserDetails(user);
          setAlbumDetails(album);
          console.log(album);
        })
      )
      .catch((errors) => {
        // react on errors.
      });
  }, []);
  return (
    <div className="flex justify-between items-center lg:items-start flex-col lg:flex-row px-8 py-5">
      <div className="w-full sm:w-11/12 lg:w-2/4">
        <h5 className="text-xl mb-10">User List</h5>
        {userDetails.map((val, ind) => {
          return (
            <div
              className="flex flex-col md:flex-row items-center md:items-start shadow-md border border-gray-200 rounded-lg w-11/12 overflow-hidden my-5 mx-auto md:mx-0"
              key={ind}
            >
              <img
                src="https://picsum.photos/id/1005/90/90"
                alt="user"
                className="w-32 h-32 rounded-full md:rounded-none mt-2 md:mt-0"
              />
              <div className="px-5 py-2 text-center md:text-left">
                <h6 className="font-semibold text-lg">{val.name}</h6>
                <p className="font-light">{val.email}</p>
                <p className="font-light">{val.phone}</p>
                <p className="font-light">{val.address.city}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full sm:w-11/12 lg:w-2/4">
        <h5 className="text-xl mb-10">Album List</h5>
        {albumDetails.map((val, ind) => {
          return (
            <div
              className="flex flex-col md:flex-row items-center md:items-start shadow-md border border-gray-200 rounded-lg w-11/12 overflow-hidden my-5 mx-auto md:mx-0"
              key={ind}
            >
              <img
                src="https://picsum.photos/id/101/90/90"
                alt="album"
                className="w-32 h-32 rounded-full md:rounded-none mt-2 md:mt-0"
              />
              <p className="px-5 py-2 font-semibold text-lg text-center md:text-left">
                {val.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Info;
