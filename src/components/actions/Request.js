import axios from "axios";
import React from "react";

function Request() {
  const [result, setResult] = React.useState();
  const BASE_URL =
    "https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCJvrXtfvpFuPCH_D-hmxPgTVn007hUGus";
  React.useEffect(() => {
    const asyncCall = async () => {
      const response = await axios.get(BASE_URL);
      setResult(response);
      // .then((res) => {
      //   if (res.data.code === "200") {
      //     console.log("status 200");
      //   }
      // });
    };
    asyncCall();
  }, []);

  // .catch((error) => alert(error.message));

  return <>{setResult}</>;
}

export default Request;
