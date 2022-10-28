import React, { useState } from "react";
import { SearchIcon } from "@/icons/components/index";
import { InputField } from "../common";

type SearchInputType = {
  placeholder?: string;
};

const SearchInput: React.FC<SearchInputType> = ({ placeholder }) => {
  const [input, setInput] = useState("");

  const handleOnSubmit = (e: any) => {
    e.preventDefault();

    if (window) {
      window.open(`https://gateway.ethswarm.org/access/${input}`, "_blank");
      setInput("");
    }
  };

  return (
    <form className="relative" onSubmit={handleOnSubmit}>
      <label className="sr-only" htmlFor="search" />
      <InputField
        placeholder={placeholder}
        name="search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="absolute top-0 bottom-0 w-4 h-4 translate-y-1/2 right-2"
      >
        <span className="sr-only">Search nodes</span>
        <SearchIcon className="text-gray-300 pointer-events-none" />
      </button>
    </form>
  );
};
export default SearchInput;
