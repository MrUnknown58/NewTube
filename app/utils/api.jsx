import axios from "axios";

async function callAPI(url, params) {
  const BASE_URL = "https://youtube-v31.p.rapidapi.com";
  console.log("URL: " + url);
  console.log(`${BASE_URL}/${url}`);
  var response;
  console.log(process.env.NEXT_PUBLIC_Rapid_API_Host);
  try {
    const config = {
      // method: method,
      // // url: process.env.REACT_APP_BASE_URL + apiEndpoint,
      // url: url,
      // data: payload,
      // headers: {
      //   accept: "application/json",
      //   "Content-Type": "application/json",
      // },
      method: "GET",
      params: {
        ...params,
      },
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_Rapid_API_Host,
      },
    };
    console.log(config);
    response = await axios.get(`${BASE_URL}/${url}`, config);
    console.log(
      "\n😛API Success  =>  ",
      BASE_URL + "/" + url,
      "\n",
      " 🅿️ API Parameters => ",
      config.params,
      "\n",
      " ⚡ Action Name => ",
      "GET",
      "\n",
      " ✅API Response => ",
      response.data
    );
    return response.data;
  } catch (error) {
    console.log(
      "\n👩‍💻API Failed  =>  ",
      BASE_URL + "/" + url,
      "\n",
      " 🅿️ API Parameters => ",
      config.params,
      "\n",
      " ⚡ Action Name => ",
      "GET",
      "\n",
      " ⚠️ Issue => ",
      error
    );
    console.log(error);
  }
}

export default callAPI;
