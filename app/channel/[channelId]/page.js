"use client";
import callAPI from "@/app/utils/api";
import ChannelCard from "@/components/ChannelCard";
import Videos from "@/components/Videos";
import { Box } from "@mui/joy";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Channel = ({ params }) => {
  const { channelId } = params;
  const [channelDetail, setchannelDetail] = useState();
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const channelParams = {
        id: channelId,
        part: "snippet,statistics",
      };
      const videoParams = {
        channelId: channelId,
        part: "snippet,id",
        order: "date",
        maxResults: "50",
      };
      const channelResponse = await callAPI(`channels`, channelParams);
      console.log(channelResponse);
      setchannelDetail(channelResponse?.items && channelResponse?.items[0]);
      const videoResponse = await callAPI(`search`, videoParams);
      console.log(videoResponse);
      setvideos(videoResponse.items);
    };
    fetchData();
  }, [channelId]);

  return (
    <>
      <Box minHeight="95vh">
        <Box>
          {/* <div
            style={{
              height: "300px",
              // background:
              //   "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
              zIndex: 10,
            }}
          /> */}
          {console.log(
            channelDetail?.brandingSettings?.image?.bannerExternalUrl
          )}
          <Box
            component="img"
            height={450}
            style={{ width: "100%" }}
            src={channelDetail?.brandingSettings?.image?.bannerExternalUrl}
            alt=""
          />
          <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
        </Box>
        <Box p={2} display="flex">
          <Box sx={{ mr: { sm: "100px" } }} />
          <Videos videos={videos} />
        </Box>
      </Box>
    </>
  );
};

export default Channel;
