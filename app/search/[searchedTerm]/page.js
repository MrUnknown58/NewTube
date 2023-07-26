"use client";
import callAPI from "@/app/utils/api";
import Videos from "@/components/Videos";
import { Box, Typography } from "@mui/joy";
import React, { useEffect, useState } from "react";

const SearchedTerms = ({ params: { searchedTerm } }) => {
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const params = {
        q: searchedTerm,
        part: "snippet",
        maxResults: "50",
      };
      const response = await callAPI("search", params);
      console.log(response);
      setvideos(response.items);
    };
    fetchData();
  }, []);
  return (
    <>
      <Box p={2} minHeight="95vh">
        <Typography
          variant="h4"
          fontWeight={900}
          className="text-white"
          mb={3}
          // ml={{ sm: "100px" }}
        >
          Search Results for{" "}
          <span style={{ color: "#FC1503" }}>{searchedTerm}</span> videos
        </Typography>
        <Box display="flex">
          <Box />
          {<Videos videos={videos} />}
        </Box>
      </Box>
    </>
  );
};

export default SearchedTerms;
