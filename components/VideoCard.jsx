import { CheckCircleOutline, Favorite } from "@mui/icons-material";
import {
  AspectRatio,
  CardContent,
  CardOverflow,
  Divider,
  Typography,
} from "@mui/joy";
import { Box, Card, CardMedia, IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  // console.log(snippet?.title);
  const [lastUpdated, setLastUpdated] = useState("");
  useEffect(() => {
    //   if (faqQuestions !== null && faqQuestions?.length > 0) {
    let ans = timeSince(new Date((snippet?.publishTime).toLocaleString()));
    setLastUpdated(ans);
    // console.log(ans);
    //   } else {
    //     setLastUpdated("0 days ago");
    //   }
  }, []);
  const timeSince = (date) => {
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = seconds / 31536000;
    if (interval > 1) {
      if (Math.floor(interval) === 1) return Math.floor(interval) + " year ago";
      return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      if (Math.floor(interval) === 1)
        return Math.floor(interval) + " month ago";
      return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      if (Math.floor(interval) === 1) return Math.floor(interval) + " day ago";
      return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      if (Math.floor(interval) === 1) return Math.floor(interval) + " hour ago";
      return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
      if (Math.floor(interval) === 1)
        return Math.floor(interval) + " minute ago";
      return Math.floor(interval) + " minutes ago";
    }
    if (Math.floor(seconds) === 1) return Math.floor(seconds) + " second ago";
    return Math.floor(seconds) + " seconds ago";
  };
  return (
    <>
      <Card
        sx={{
          width: { xs: "100%", sm: "358px", md: "320px" },
          boxShadow: "none",
          borderRadius: 0,
        }}
      >
        <Link href={`/video/${videoId}`}>
          <CardMedia
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
          />
        </Link>
        <CardContent
          className="justify-around"
          sx={{ backgroundColor: "#1E1E1E", height: "106px" }}
        >
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{
              color: "#FFF",
            }}
          >
            {snippet?.title.slice(0, 60)}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: "gray" }}
            className="flex justify-between items-center"
          >
            <Box>
              {snippet?.channelTitle}
              <CheckCircleIcon
                sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
              />
            </Box>
            <Typography variant="subtitle2">{lastUpdated}</Typography>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default VideoCard;
