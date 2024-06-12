import { useEffect, useState } from "react";

const UseDebounce = (search) => {
  const [delaySearch, setDelaySearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelaySearch(search);
    }, 1000);
    return () => clearTimeout(timer);
  }, [search]);

  return { delaySearch };
};

export default UseDebounce;
