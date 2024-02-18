// githubAPI.js

import { useState, useEffect } from "react";

const useGitHubData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Govindghosh")
      .then((res) => res.json())
      .then((userData) => {
        setData(userData);
      });
  });

  return data;
};

export default useGitHubData;
