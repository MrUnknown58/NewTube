"use client";
import Videos from "@/components/Videos";
import { Box, Stack, Typography } from "@mui/joy";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import callAPI from "@/app/utils/api";
import Loader from "@/components/Loader";

const VideoDetail = ({ params }) => {
  const { videoId } = params;
  const [videoDetail, setvideoDetail] = useState([]);
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const detailParams = {
        part: "contentDetails,snippet,statistics",
        id: videoId,
      };
      const vidDetail = await callAPI("videos", detailParams);
      setvideoDetail(vidDetail?.items[0]);
      const suggestionParams = {
        relatedToVideoId: videoId,
        part: "id,snippet",
        type: "video",
        maxResults: "50",
      };
      const suggest = await callAPI("search", suggestionParams);
      setvideos(suggest.items);
    };
    fetchData();
  }, [videoId]);
  if (!videoDetail?.snippet) return <Loader />;
  // else console.log(videoDetail?.snippet?.title);
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  // console.log(title + "  " + channelTitle);
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            {/* <Box sx={{ height: "77vh", width: "100%" }}> */}
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
              width="100%"
              height="70vh"
              controls
            />
            {/* </Box> */}
            <Typography
              className="text-[#FFF]"
              variant="h5"
              fontWeight="bold"
              p={2}
            >
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link href={`/channel/${channelId}`}>
                <Typography
                  // variant={{ sm: "subtitle1", md: "h6" }}
                  sx={{ fontSize: { sm: "1.5em", md: "0.67em" } }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
