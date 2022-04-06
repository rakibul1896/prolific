import React, { useCallback, useEffect, useMemo, useState } from 'react';
import validator from 'validator';

const checkBox = [
  {
    name: 'Css',
  },
  {
    name: 'JavaScript',
  },
  {
    name: 'React',
  },
  {
    name: 'Figma',
  },
];

const radio = [
  {
    name: 'Male',
  },
  {
    name: 'Female',
  },
  {
    name: 'Others',
  },
];

const Form = () => {
  const initialValue = useMemo(() => {
    return {
      email: '',
      name: '',
      skills: [...Array(4).fill(false)],
      gender: [...Array(3).fill(false)],
    };
  }, []);

  // states
  const [formValue, setFormValue] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // console.log(formValue.gender);
  // functions
  const handleOnChangeCheckbox = (position) => {
    const updatedCheckedState = formValue.skills.map((item, index) =>
      index === position ? !item : item
    );
    setFormValue({ ...formValue, skills: updatedCheckedState });
  };
  const handleOnChangeRadio = (position) => {
    const updateGenderState = formValue.gender.map((value, index) =>
      index === position ? !value : false
    );
    setFormValue({ ...formValue, gender: updateGenderState });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValue));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const validate = validator.isEmail(values.email);
    if (!values.email) {
      errors.email = 'Email is required.';
    } else if (!validate) {
      errors.email = 'Enter a valid email address !';
    }
    if (!values.name) errors.name = 'Name is required.';
    if (!values.skills.includes(true)) errors.skills = 'Skills is required.';
    return errors;
  };

  const getSkills = useCallback((state, boxes) => {
    const index = state.reduce(
      (acc, val, ind) => (val === true ? acc.concat(ind) : acc),
      []
    );
    const skills = index.reduce(
      (acc, val) => acc.concat(boxes[val].name.toLowerCase()),
      []
    );
    return skills;
  }, []);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const object = {
        email: formValue.email,
        name: formValue.name,
        skills: getSkills(formValue.skills, checkBox),
        gender: getSkills(formValue.gender, radio)[0],
      };
      console.log(object);
      alert('See the Console');
      setFormValue(initialValue);
      setIsSubmit(false);
    }
  }, [formErrors, isSubmit, formValue, initialValue, getSkills]);

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
            value={formValue.email}
            name="email"
            onChange={handleChange}
          />
          <p className="mt-1 text-red-500">{formErrors.email}</p>
        </label>

        <label className="mt-4 w-full">
          Name :
          <input
            type="text"
            className="w-full border-2 focus:border-blue-400 outline-none px-3 py-1 rounded-md mt-1"
            value={formValue.name}
            name="name"
            onChange={handleChange}
          />
          <p className="mt- text-red-500">{formErrors.name}</p>
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
                    checked={formValue.skills[ind]}
                    onChange={() => handleOnChangeCheckbox(ind)}
                  />
                  <label htmlFor={`custom-checkbox-${ind}`} className="ml-1">
                    {name}
                  </label>
                </div>
              );
            })}
          </div>
          <p className="text-red-500">{formErrors.skills}</p>
        </div>

        <div className="mt-4">
          <p className="mb-1">Gender :</p>
          {radio.map(({ name }, ind) => {
            return (
              <label key={ind} className="mr-3">
                <input
                  type="radio"
                  value={name}
                  name="gender"
                  checked={formValue.gender[ind]}
                  onChange={(e) => handleOnChangeRadio(ind)}
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
