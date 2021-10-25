import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SidebarItem from './SidebarItem';

const Side = styled.div`
  position: absolute;
  width: 303px;
  height: 707px;
  left: 0px;
  top: 144px
  background-color: #C4C4C4;
  // display: flex;
  // flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Menu = styled.div`
  margin-top: 30px;
  width: 303px;
  background-color: #C4C4C4;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  justify-content: center;
  align-items: center;
`;
function Sidebar() {

  const pathName = useLocation().pathname;

  const menus = [
    { name: '마이 페이지', path: '/main/my_page' },
    { name: '포트폴리오', path: '/main/portfolio' },
    { name: '팔로잉', path: '/main/following' },
  ];
  return (
    <Side>
      <Menu>
        {menus.map((menu, index) => {
          return (
            <NavLink
              exact
              style={{ color: 'black', textDecoration: 'none' }}
              to={menu.path}
              key={index}
            >
              <SidebarItem
                menu={menu}
                isActive={pathName === menu.path ? true : false }
              />
            </NavLink>
          );
        })}
      </Menu>
    </Side>
  );
}

export default Sidebar;
