"use client"

import styles from './Drawer.module.scss'

export default function Drawer({onClose, items = []}) {
  let sum = 0
  sum += items.price

  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2 onClick={onClose} className="flex justify-between mb-30">
          Корзина
          <img onClick={onClose} className="removeBtn cursor-pointer" src="/img/btn-remove.svg" alt="remove"/>
        </h2>

        <div className={styles.items}>
          {items.map((item) => (
            <div className="cartItem flex items-center mb-5">
            <div
              style={{ backgroundImage: `url(${item.imageUrl})` }}
              className="cartItemImg"
            ></div>
            <div className="mr-5">
              <p className="mb-1">{item.title}</p>
              <b> руб.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
          </div>
          ))}
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/arrow.svg" alt="arrow" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}