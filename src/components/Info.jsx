import React, { useEffect, useState } from 'react';
import axios from 'axios';

const user = axios.get('https://jsonplaceholder.typicode.com/users');
const album = axios.get('https://jsonplaceholder.typicode.com/albums');

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
        })
      )
      .catch((errors) => {
        //  on errors.
      });
  }, []);
  return (
    <div className="px-10">
      <p className="text-center pt-6">
        This 'Users list' and 'Albums list' are created from two
        'jsonplaceholder' api. They are given below:
      </p>
      <div className="flex justify-center my-6">
        <a
          className="px-3 sm:px-8 py-2 bg-red-400 text-sm sm:text-base text-white rounded mr-5"
          href="https://jsonplaceholder.typicode.com/users"
          target="_blank"
          rel="noopener noreferrer"
        >
          Users Api
        </a>
        <a
          className="px-3 sm:px-8 py-2 bg-red-400 text-sm sm:text-base text-white rounded"
          href="https://jsonplaceholder.typicode.com/albums"
          target="_blank"
          rel="noopener noreferrer"
        >
          Albums Api
        </a>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full">
          <h5 className="text-xl mb-10 mt-6">User List</h5>
          {userDetails.map((val, ind) => {
            return (
              <div
                className="flex flex-col lg:flex-row items-center lg:items-start shadow-md border border-gray-200 rounded-md overflow-hidden mr-0 lg:mr-10 my-6"
                key={ind}
              >
                <img
                  src="https://picsum.photos/id/1005/90/90"
                  alt="user"
                  className="w-32 h-32 rounded-full lg:rounded-none my-5 lg:my-0"
                />
                <div className="px-5 py-2 text-center lg:text-left">
                  <h6 className="font-semibold text-lg">{val.name}</h6>
                  <p className="font-light">{val.email}</p>
                  <p className="font-light">{val.phone}</p>
                  <p className="font-light">{val.address.city}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full">
          <h5 className="text-xl mb-10 mt-6">Album List</h5>
          {albumDetails.map((val, ind) => {
            return (
              <div
                className="flex flex-col lg:flex-row items-center lg:items-start shadow-md border border-gray-200 rounded-md overflow-hidden my-6"
                key={ind}
              >
                <img
                  src="https://picsum.photos/id/101/90/90"
                  alt="album"
                  className="w-32 h-32 rounded-full lg:rounded-none mt-2 lg:mt-0"
                />
                <p className="px-5 py-2 font-semibold text-lg text-center lg:text-left">
                  {val.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Info;
