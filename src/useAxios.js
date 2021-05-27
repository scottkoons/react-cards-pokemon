import React, { useState } from "react";
import axios from "axios";
import { v4 as uuid } from 'uuid';

const useAxios = (url) => {
  const [cards, setCards] = useState([]);
  const getData = async (name) => {
    if (name) { url = url + name; }
    console.log("name is: ", name);
    console.log("url is: ", url);
    const response = await axios.get(url);
    setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    console.log("response.data is: ", response.data);
  };
  return [cards, getData];
};

export default useAxios;