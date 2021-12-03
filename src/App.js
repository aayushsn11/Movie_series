import React, { useEffect, useState } from "react";
import Series from "./Components/Series";
import Movies from "./Components/Movies";
import Header from "./Components/Header";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
function App() {
  const [data, setData] = useState([]);
  const fetchdata = async () => {
    const apidata = await axios.get(
      "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
    );
    setData(apidata.data.entries);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  const seriesdata = data.filter((item) => {
    return item.programType === "series";
  });
  const moviesdata = data.filter((item) => {
    return item.programType === "movie";
  });

  console.log(data);
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/series" element={<Series data={seriesdata} />} />
        <Route exact path="/movies" element={<Movies data={moviesdata} />} />
      </Routes>
    </div>
  );
}

export default App;
