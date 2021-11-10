import React, { useCallback, useEffect, useState } from "react";
import validator from "validator";

const checkBox = [
  {
    name: "Css",
  },
  {
    name: "JavaScript",
  },
  {
    name: "React",
  },
  {
    name: "Figma",
  },
];

const radio = [
  {
    name: "Male",
  },
  {
    name: "Female",
  },
  {
    name: "Others",
  },
];

const Form = () => {
  // states

  const [emailValue, setEmailValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [checkedState, setCheckedState] = useState(
    new Array(checkBox.length).fill(false)
  );
  const [genderValue, setGenderValue] = useState(null);

  const [emailError, setEmailError] = useState(null);
  const [nameError, setNameError] = useState(null);
  const [checkError, setCheckError] = useState(null);

  // functions

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validEmail = validator.isEmail(emailValue);
    const checked = checkedState.includes(true);

    if (!emailValue) {
      setEmailError("Email field is required.");
    } else {
      validEmail ? setEmailError("") : setEmailError("Enter a valid email !");
    }
    !nameValue ? setNameError("Name field is required.") : setNameError("");
    !checked ? setCheckError("Skills field is required.") : setCheckError("");
  };

  const getSkills = useCallback(() => {
    const index = checkedState.reduce(
      (acc, val, ind) => (val === true ? acc.concat(ind) : acc),
      []
    );
    const skills = index.reduce(
      (acc, val) => acc.concat(checkBox[val].name.toLowerCase()),
      []
    );

    return skills;
  }, [checkedState]);

  useEffect(() => {
    const value =
      emailValue &&
      nameValue &&
      checkedState &&
      emailError &&
      nameError &&
      checkError;

    if (value) {
      const object = {
        email: emailValue,
        name: nameValue,
        skills: getSkills(),
        gender: genderValue && genderValue.toLowerCase(),
      };

      console.log(object);
    }
  }, [
    emailValue,
    nameValue,
    checkedState,
    emailError,
    nameError,
    checkError,
    genderValue,
    getSkills,
  ]);

  return (
    <div className="flex justify-center p-10">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col items-start w-11/12 sm:w-8/12 xl:w-6/12"
      >
        <label className="mt-4 w-full">
          Email address :
          <input
            type="text"
            className="w-full border-2 focus:border-blue-400 outline-none px-3 py-1 rounded-md mt-1"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
          <p className="mt-1 text-red-500">{emailError}</p>
        </label>

        <label className="mt-4 w-full">
          Name :
          <input
            type="text"
            className="w-full border-2 focus:border-blue-400 outline-none px-3 py-1 rounded-md mt-1"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
          />
          <p className="mt- text-red-500">{nameError}</p>
        </label>

        <div className="mt-4">
          <h3>Skills :</h3>
          <div className="flex mt-1">
            {checkBox.map(({ name }, ind) => {
              return (
                <div className="mr-3" key={ind}>
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${ind}`}
                    name={name}
                    value={name}
                    checked={checkedState[ind]}
                    onChange={() => handleOnChange(ind)}
                  />
                  <label htmlFor={`custom-checkbox-${ind}`} className="ml-1">
                    {name}
                  </label>
                </div>
              );
            })}
          </div>
          <p className="text-red-500">{checkError}</p>
        </div>

        <div className="mt-4" onChange={(e) => setGenderValue(e.target.value)}>
          <p className="mb-1">Gender :</p>
          {radio.map(({ name }, ind) => {
            return (
              <label key={ind} className="mr-3">
                <input
                  type="radio"
                  value={name}
                  name="gender"
                  className="mr-1"
                />
                {name}
              </label>
            );
          })}
        </div>

        <button
          type="submit"
          className="mt-5 px-5 py-2 bg-gray-300 hover:bg-gray-600 hover:text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
