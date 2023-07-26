import { Box, CardContent, Typography } from "@mui/joy";
import { CardMedia } from "@mui/material";
import Link from "next/link";
import React from "react";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
        marginTop,
      }}
    >
      <Link href={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          {/* <CardMedia
            component="img"
            image={channelDetail?.snippet?.thumbnails?.high?.url}
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          /> */}
          {console.log(channelDetail?.snippet?.thumbnails?.high?.url)}
          <Image
            src={channelDetail?.snippet?.thumbnails?.high?.url}
            alt=""
            style={{
              borderRadius: "50%",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
            width={180}
            height={180}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}{" "}
            <CheckCircleIcon
              sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
            />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography
              sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}
            >
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString("en-US")}{" "}
              Subscribers
            </Typography>
          )}
          {channelDetail?.statistics?.videoCount && (
            <Typography
              className="justify-start"
              sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}
            >
              {channelDetail?.statistics?.videoCount} Videos
            </Typography>
          )}
          {channelDetail?.statistics?.viewCount && (
            <Typography
              className="justify-start"
              sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}
            >
              View Count: {channelDetail?.statistics?.viewCount}
            </Typography>
          )}
          {/* {channelDetail?.snippet?.description && (
            <Typography
              className="justify-start"
              sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}
            >
              {channelDetail?.snippet?.description.slice(0, 50)}...
            </Typography>
          )} */}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
