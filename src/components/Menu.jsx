import React, { useEffect, useState } from 'react';
import { formattedItems as data, itemsArray, rootId } from '../data/MenuJson';
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Menu = () => {
  const { items } = data[0];

  const initialValue = () => {
    return itemsArray
      .filter((x) => x.hasChildren && x.id !== rootId)
      .reduce((a, v) => a.concat({ name: v.data.name, isShow: false }), []);
  };

  const [visibilities, setVisibilities] = useState(initialValue());

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
    return data.map((val) => {
      return (
        <div className="ml-5 cursor-pointer text-sm sm:text-base" key={val.id}>
          <div className="flex items-center">
            <p
              data-children={val.items.length > 0 && val.label}
              onClick={handleClick}
              className='flex items-center'
            >
              {val.label}
              {val.items.length > 0 ? (
                showItems(val.label) ? (
                  <AiFillCaretUp className=" text-blue-400 text-sm ml-1.5" />
                ) : (
                  <AiFillCaretDown className=" text-sm ml-1.5" />
                )
              ) : (
                ''
              )}
            </p>
          </div>
          <div
            className={
              val.items.length > 0 && showItems(val.label) ? 'block' : 'hidden'
            }
          >
            {val.items && dropDown(val.items)}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="p-8">
      <div className="text-center mb-10">
        <p className="mb-10">
          This Dropdown menu is built from a JSON file. If a new section adds to
          the JSON file, the Dropdown menu will update.
        </p>
        <Link
          to="/jsonfile"
          className="px-8 py-3 bg-red-400 text-white rounded"
        >
          See the JSON file
        </Link>
      </div>

      <div className="ml-10 text-xl pb-10">{dropDown(items)}</div>
    </div>
  );
};

export default Menu;
