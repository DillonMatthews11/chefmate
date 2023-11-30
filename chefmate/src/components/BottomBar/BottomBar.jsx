import React from 'react'
import  "./BottomBar";
export const BottomBar = () => {
  return (
    <div className='bottombar'>
        <a className='bottom-item' href="/myrecipes">
        <img src= "./Images/Page.svg" alt="bruh" />
        </a>
        <a className='bottom-item' href="/saved">
            <img src= "./Images/Saved.svg" alt="bruh" />
        </a>
        <a className='bottom-item' href="/cart">
            <img src= "./Images/Cart.svg" alt="bruh" />
        </a>
        <a className='bottom-item' href="/home">
            <img src= "./Images/Search.svg" alt="bruh" />
        </a>
        
    </div>
  )
}
