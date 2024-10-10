import React, { useEffect, useState } from "react";
import Banner from "../components/homepage/Banner";
import RatingSection from "../components/homepage/RatingSection";
import Features from "../components/homepage/Features";
import Partners from "../components/homepage/Partners";
import axios from "axios";

function Homepage() {
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      const res = await axios("http://3.109.139.127:9000/api/get-data");
      setData(res.data);
    }

    getData();
  }, []);

  return (
    <div>
      <Banner data={data} />
      <RatingSection data={data} />
      <Features data={data} />
      <Partners data={data} />
    </div>
  );
}

export default Homepage;
