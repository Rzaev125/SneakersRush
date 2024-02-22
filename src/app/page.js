"use client";

import Card from "../components/Card/Card";
import Header from "../components/Header";
import Drawer from "../components/Drawer/Drawer";

import { useEffect, useState } from "react";

export default function Home( {localData} ) {
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [sum, setSum] = useState('0');
  
  // useEffect(() => {
  //   fetch("https://649584f4b08e17c91792369f.mockapi.io/items")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((json) => {
  //       setItems(json);
  //     });
  // })

  function onAddToCart(item) {
    setCartItems(prev => [...prev, item]);
    setSum(sum + item.price)
    console.log(sum)
  }

  function onChangeInput(event) {
    setSearchValue(event.target.value)
  }

  return (
    <>
      {cartOpened ? 
        <Drawer 
          items={cartItems} 
          setItems={setCartItems} 
          onClose = {() => setCartOpened(false)} 
        />
      : null }
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-10">
        <div className="flex items-center mb-10 justify-between">
          <h1>{searchValue != '' ? `Поиск по: "${searchValue}"` : "Все кросовки"}</h1>
          <div className="search-block flex">
            <img src="/img/search.svg" alt="search" />
            <img className="clear cursor-pointer" src="/img/btn-remove.svg" alt="remove"/>
            <input onChange={onChangeInput} value={searchValue} placeholder="Поиск ..." />
          </div>
        </div>

        <div className="flex justify-center flex-wrap ml-8">
          {items.map((item) => (
            <Card
              key={item.id}
              title={item.name}
              price={item.price}
              imageUrl={item.img}
              onPlus={(item) => onAddToCart(item)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
