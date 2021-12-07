import "./App.css";
import data from "./data/henry_iv.json";
import React from "react";
import { usePagination } from "./custom-hooks/usePagination";
import { useShowData } from "./custom-hooks/useShowData";
import { Content } from "./components/content";
import { Pagination } from "./components/pagination-buttons";

function App() {
  const [page, handlePrevious, handleNext] = usePagination(data);
  const [showLines] = useShowData(page, data, 10);

  return (
    <div className="app">
      <h1 className="app-heading">Henry IV Play</h1>
      <Content showLines={showLines} />
      <Pagination handlePrevious={handlePrevious} handleNext={handleNext} />
    </div>
  );
}

export default App;
