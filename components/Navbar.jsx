"use client";
import { Box, IconButton, Stack } from "@mui/material";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
const Navbar = () => {
  const [searchedTerm, setsearchedTerm] = useState("");
  const router = useRouter();
  const handleSubmit = () => {
    router.push("/feed", { state: { searchedTerm: searchedTerm } });
  };
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{
          position: "sticky",
          top: 0,
          background: "#000",
          justifyContent: "space-between",
        }}
      >
        <Link href="/feed">
          <SubscriptionsIcon
            sx={{ color: "red", height: "2rem", width: "2rem" }}
          />
        </Link>
        <SearchBar
          searchedTerm={searchedTerm}
          setsearchedTerm={setsearchedTerm}
          handleSubmit={handleSubmit}
        />
      </Stack>
    </>
  );
};

export default Navbar;
