/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom';
import { Label } from "flowbite-react";

const CategoryLink = ({ label, handleCategoryChange, selectedCategories }:any) => (
  <div className="event_filter_wrapper ">
    <Link
      to=""
      onClick={() => handleCategoryChange(label)}
      className="flex border-b-4 border-grey-800 active:ring focus:outline-none focus:border-b-4 focus:border-b-blue-800"
    >
      <span className='active:before:block active:before:absolute active:before:-inset-1 active:before:-skew-y-3 active:before:bg-blue-700 active:relative active:inline-block hover:before:block hover:before:absolute hover:before:-inset-1 hover:before:-skew-y-3 hover:before:bg-blue-700 hover:relative hover:inline-block'>
        <Label
          htmlFor={label}
          className={`flex ${selectedCategories.includes(label) ? 'font-bold active:relative active:text-white hover:relative hover:text-white' : 'flex active:relative active:text-white hover:relative hover:text-white'}`}
        >
          {label}
        </Label>
      </span>
    </Link>
  </div>
);

export default CategoryLink;
