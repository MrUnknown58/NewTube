import React from "react";
import { Stack } from "@mui/material";
import { categories } from "@/app/utils/constants";

const SideBar = ({ selected, setselected }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
      width: {
        md: "15rem",
      },
    }}
  >
    {categories.map((category) => (
      <button
        className={`font-bold uppercase text flex items-center justify-start cursor-pointer bg-transparent border-0 hover:bg-[#FC1503] hover:opacity-100 hover:text-white ${
          category.name === selected ? "opacity-100" : "opacity-[.5]"
        }`}
        onClick={() => setselected(category.name)}
        style={{
          background: category.name === selected && "#FC1503",
          color: "white",
          padding: "7px 15px",
          margin: "10px 0px",
          "border-radius": "20px",
          transition: "all 0.3s ease",
        }}
        key={category.name}
      >
        <span
          className={`${
            category.name === selected ? "text-white" : "text-red-600"
          } mr-[15px]`}
          // style={{
          //   color: category.name === selected ? "white" : "red hover:white",
          //   marginRight: "15px",
          // }}
        >
          {category.icon}
        </span>
        <span>{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default SideBar;
