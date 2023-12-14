import React from 'react'
import { MenuList } from '../helpers/MenuList.js';
import MenuItem  from '../components/MenuItem.js';
import "../styles/Menu.css"

function Menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Our Menu</h1>
      <div className='menuList'> 
      {MenuList.map((menuIt, key) => {
          return (
            <MenuItem
              key={key}
              image={menuIt.image}
              name={menuIt.name}
              price={menuIt.price}
            />
          );
        })}
      </div>
    </div>
  )
}

export default Menu
