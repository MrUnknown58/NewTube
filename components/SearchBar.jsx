"use client";
import { Button } from "@mui/joy";
import { Input } from "@mui/joy";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const [searchedTerm, setsearchedTerm] = useState("");
  const router = useRouter();
  const handleSubmit = () => {
    router.push(`/search/${searchedTerm}`);
  };
  return (
    <>
      <div className="relative flex w-full gap-2 md:w-max justify-end">
        <Input
          type="search"
          color="white"
          label="Type here..."
          className="pr-20 rounded-xl min-w-[288px]"
          // containerProps={{
          //   className: "min-w-[288px]",
          // }}
          onKeyDown={(e) => {
            if (e.code === "Enter") handleSubmit();
          }}
          onChange={(e) => {
            //   // if (e.target.value === "Enter") handleSubmit();
            setsearchedTerm(e.target.value);
            //   console.log(e.target.value);
          }}
          placeholder="Search here..."
        />
        <Button
          size="sm"
          color="white"
          className="!absolute right-1 top-1 rounded"
        >
          <SearchIcon />
        </Button>
      </div>
    </>
  );
};

export default SearchBar;
