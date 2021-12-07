import { useState } from "react";

export const usePagination = (data) => {
  const [page, setPage] = useState(1);
  const handlePrevious = () => {
    if (page - 1 === 0) {
      setPage(page);
    } else {
      setPage(page - 1);
    }
  };
  const handleNext = () => {
    if (page + 1 > data.length) {
      setPage(page);
    } else {
      setPage(page + 1);
    }
  };

  return [page, handlePrevious, handleNext];
};
