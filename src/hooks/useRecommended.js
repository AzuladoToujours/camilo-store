import { useState, useEffect } from 'react';

const getRecommended = () => {
  const recommendList = ['iphone', 'motorola', 'SSD', 'ASUS', 'TV'];
  const recommended = recommendList[Math.floor(Math.random() * recommendList.length)];
  return recommended;
};

const useRecommended = () => {
  const [recommended, setRecommended] = useState([]);
  const recommendedProduct = getRecommended();

  const url = `https://api.mercadolibre.com/sites/MCO/search?q=${recommendedProduct}&paging&offset=0`;

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setRecommended(data.results));
  }, []);
  return recommended;
};

export default useRecommended;
