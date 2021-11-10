import React, { useState } from "react";

const Search = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <p className={`p-10 text-2xl  ${!value ? "text-gray-300": 'text-black'}`}>{!value ? "Write in the input field" : value}</p>
      <div className="min-h-60v flex justify-center items-center pb-28">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoFocus
        className='px-3 py-2 border-2 focus:border-blue-400 outline-none rounded-md w-11/12 sm:w-8/12 md:w-5/12 text-2xl'
      />
      </div>
    </div>
  );
};

export default Search;
