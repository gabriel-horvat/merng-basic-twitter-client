import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'

 function MenuBar(){
  const [activeItem, setActiveItem] = useState('')

  const handleItemClick = (e, { name }) => setActiveItem(name)

    return (
      <Menu compact>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
        >
          HOME
        </Menu.Item>

        <Menu.Item
          name='login'
          active={activeItem === 'login'}
          onClick={handleItemClick}
        >
          LOGIN
        </Menu.Item>

        <Menu.Item
          name='register'
          active={activeItem === 'register'}
          onClick={handleItemClick}
        >
          REGISTER
        </Menu.Item>
      </Menu>
    )
  
}

export default MenuBar