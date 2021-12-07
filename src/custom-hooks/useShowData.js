import { useState, useEffect } from "react";

export const useShowData = (page, data, totalItems) => {
  const [showLines, setShowLines] = useState([]);
  useEffect(() => {
    let filteredLines = data.filter((item) => {
      return (
        item.line_id < totalItems * page &&
        item.line_id >= totalItems * (page - 1)
      );
    });
    setShowLines(filteredLines);
    return () => {};
  }, [page, totalItems, data]);

  return [showLines];
};
