import React, { useEffect, useContext } from "react";
import { API_KEY, API_URL } from "../config";
import { Preloader } from "./Preloader";
import { GoodsList } from "../components/GoodsList";
import { Cart } from "../components/Cart";
import { BasketList } from "../components/BasketList";
import { Alert } from "../components/Alert";
import { ShopContext } from "../context";

function Shop() {
  const { loading, order, isBasketShow, alertName, setGoods } =
    useContext(ShopContext);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.featured);
      });
    //eslint-disable-next-line
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
}

export { Shop };
