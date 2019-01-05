import React from 'react'
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Nav = ({handleClick}) => {
    return (
         <Menu
              onClick={handleClick}
              style={{ width: 256 }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
              <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                <MenuItemGroup key="g1" title="About Me">
                  <Menu.Item key="1" to='/'>Home</Menu.Item>
                  <Menu.Item key="2" to='/about'>About</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup key="g2" title="Librarries">
                    <SubMenu key="sub2" title="Images">
                    <Menu.Item key="7" to='/react-carousel'>React carousel</Menu.Item>
                    <Menu.Item key="7" to='/react-images'>React Images</Menu.Item>

                    </SubMenu>

                  <Menu.Item key="4">Option 4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              {/* <SubMenu key="sub" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </SubMenu> */}

            </Menu>
    )
}

export default Nav
