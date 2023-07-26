import { Box, Card, Grid, Stack } from "@mui/joy";
import React from "react";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const Videos = ({ videos, direction }) => {
  console.log(videos);
  return (
    <>
      <Stack
        direction={direction || "row"}
        flexWrap="wrap"
        justifyContent="start"
        alignItems="start"
        gap={2}
      >
        {videos.map((video, i) => {
          return (
            <Box className="px-2" key={i}>
              {video?.id?.videoId && <VideoCard video={video} />}
              {video?.id?.channelId && <ChannelCard channelDetail={video} />}
              {video?.id?.playlistId && (
                <div className="text-white w-[320px]">Playlist</div>
              )}
            </Box>
          );
        })}
      </Stack>
    </>
  );
};

export default Videos;
