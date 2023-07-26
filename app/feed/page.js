"use client";
import { Box, Stack, Typography } from "@mui/material";
import { categories } from "../utils/constants";
import { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import callAPI from "../utils/api";
import Videos from "../../components/Videos";
import SideBar from "@/components/SideBar";

const Feed = () => {
  const [selected, setselected] = useState(categories[0].name);
  const [videos, setvideos] = useState([]);
  const sortByPublishTime = (a, b) => {
    return new Date(a.publishTime) - new Date(b.publishTime);
  };
  useEffect(() => {
    const fetchFeed = async () => {
      let response;
      const params = {
        q: selected,
        part: "snippet",
        maxResults: "50",
        // order: "date",
      };
      if (selected !== "New") {
        response = await callAPI(`search`, params);
      } else
        response = await callAPI(
          `search?relatedToVideoId=7ghhRHRP6t4&part=snippet`
        );
      // const data = await response.json();
      console.log(response);
      const sortedResponse = response.items.sort(sortByPublishTime);
      setvideos(sortedResponse);
    };
    fetchFeed();
  }, [selected]);
  return (
    <>
      <Stack className="flex md:flex-row flex-col space-x-10">
        <Box
          sx={{
            height: { sx: "auto", md: "92vh" },
            borderRight: "1px solid #3d3d3d",
            px: { sx: 0, md: 2 },
          }}
        >
          <SideBar selected={selected} setselected={setselected} />
        </Box>
        <Box className="">
          <Box className="overflow-auto h-[90vh] pt-2" sx={{ flex: 2 }}>
            <Typography
              className="text-[#FC1503] font-mono font-bold mb-2"
              variant="h4"
            >
              <span className="text-white">{selected} </span>
              Videos
            </Typography>
            <Videos videos={videos} />
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default Feed;
