import React, { useEffect, useState } from "react";
import { formattedItems as data, itemsArray, rootId } from "../data/MenuJson";

const Menu = () => {
  const { items } = data[0];

  const initialValue = () => {
    const val = itemsArray
      .filter((x) => x.hasChildren && x.id !== rootId)
      .reduce((a, v) => a.concat({ name: v.data.name, isShow: false }), []);
    return val;
  };

  const [visibilities, setVisibilities] = useState(initialValue());
  // console.log(visibilities);

  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const children = event.currentTarget.dataset.children;
    const newVisibilities = [...visibilities];
    newVisibilities.map((val) => {
      const value =
        val.name === children ? (val.isShow = !val.isShow) : val.isShow;
      return value;
    });

    setVisibilities(newVisibilities);
  };

  const showItems = (e) => {
    const val = visibilities.filter((v) => {
      return v.name === e;
    });
    return val.length > 0 && val[0].isShow;
  };

  useEffect(() => {
    const hideChildren = (e) => {
      const index = visibilities.indexOf(e);
      const remainingArray = visibilities.slice(index + 1);
      remainingArray.map((v) => {
        return (v.isShow = false);
      });
    };

    visibilities.map((v) => {
      return !v.isShow && hideChildren(v);
    });
  }, [visibilities]);

  const dropDown = (data) => {
    return data.map((val, index) => {
      return (
        <div
          className="ml-5"
          key={val.id}
          data-children={val.items.length > 0 && val.label}
          onClick={handleClick}
        >
          {val.label}
          <div
            className={
              val.items.length > 0 && showItems(val.label) ? "block" : "hidden"
            }
          >
            {}
            {val.items && dropDown(val.items)}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="p-8 flex justify-center">
      <div>{dropDown(items)}</div>
    </div>
  );
};

export default Menu;

// const data = ["James", "John", "Jessica", "Jamie"];

// const Menu = () => {
//   const [visibilities, setVisibilities] = useState(() =>
//     data.map((x) => true)
//   );

//   const handleClick = (event) => {
//     const index = parseInt(event.currentTarget.dataset.index, 10);
//     console.log(visibilities)
//     const newVisibilities = [...visibilities];
//     console.log(newVisibilities)
//     newVisibilities[index] = !newVisibilities[index];
//     setVisibilities(newVisibilities);
//   };

//   return (
//     <div className="p-8">
//       {data.map((value, index) => (
//         <h1
//           data-index={index}
//           onClick={handleClick}
//           className={visibilities[index] ? "selected" : undefined}
//           key={index}
//         >
//           Hello {value}, you are {visibilities[index] ? "block" : "hidden"}!
//         </h1>
//       ))}
//     </div>
//   );
// };

// export default Menu;
