import axios from "axios";

export const GET = async (req, { params }) => {
  console.log(req);
  console.log(params);
  // const url = params.url;
  // const BASE_URL = "https://youtube-v31.p.rapidapi.com/search";
  // const options = {
  //   method: "GET",
  //   params: {
  //     maxResults: "5",
  //   },
  //   headers: {
  //     "X-RapidAPI-Key": process.env.NEXT_APP_Rapid_API_Key,
  //     "X-RapidAPI-Host": process.env.NEXT_APP_Rapid_API_Host,
  //   },
  // };

  // try {
  //   const response = await axios.get(`${BASE_URL}/${url}`, options);
  //   console.log(response.data);
  //   return new Response(JSON.stringify(await response.data.json()));
  // } catch (error) {
  //   // console.error(error);
  //   return new Response(JSON.stringify("Failed to fetch videos"), {
  //     status: 404,
  //   });
  // }
};
