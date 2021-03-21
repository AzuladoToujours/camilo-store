import { useState, useEffect } from 'react';

const getUser = (product) => {
  const [user, setUser] = useState();
  const userId = product.seller.id;

  const url = `https://api.mercadolibre.com/users/${userId}`;

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setUser(data.nickname));
  });
  return user;
};

export default getUser;
