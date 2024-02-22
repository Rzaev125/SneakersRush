"use client"

import React, { useState } from 'react';
import styles from './Card.module.scss'

export default function Card({onFavorite, title, imageUrl, price, onPlus}) {
    const [isAdded, setIsAdded] = useState(false)

    function onClickPlus() {
        onPlus({ title, imageUrl, price });
        setIsAdded(!isAdded);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onFavorite}>
                <img src="/img/unliked.svg" alt="Unliked" />
            </div>
            <img width='100%' height={135} src={imageUrl} alt="sneakers" />
            <h5 className='mt-3 mb-0'>{title}</h5>
            <div id={styles.product} className="flex justify-between items-center">
                <div className="flex flex-col">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'} alt="plus" />
            </div>
        </div>
    )
}