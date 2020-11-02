import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import {Link } from 'react-router-dom'

 function MenuBar(){
  const pathname = window.location.pathname
  const path = pathname === '/' ? 'home' : pathname.substr(1)
  const [activeItem, setActiveItem] = useState(path)


  const handleItemClick = (e, { name }) => setActiveItem(name)

    return (
      <Menu compact size = "massive" color = "blue">
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
          as = {Link}
          to = "/"
        >
          HOME
        </Menu.Item>

        <Menu.Item
          name='login'
          active={activeItem === 'login'}
          onClick={handleItemClick}
          as = {Link}
          to = "/login"
        >
          LOGIN
        </Menu.Item>

        <Menu.Item
          name='register'
          active={activeItem === 'register'}
          onClick={handleItemClick}
          as = {Link}
          to = "/register"
        >
          REGISTER
        </Menu.Item>
      </Menu>
    )
  
}

export default MenuBar