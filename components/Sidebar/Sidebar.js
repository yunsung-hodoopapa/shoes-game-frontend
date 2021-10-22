import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SidebarItem from './SidebarItem';

const Side = styled.div`
  display: flex;
  borde: 1px solid blue;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
`;

const Menu = styled.div`
  margin-top: 30px;
  width: 200px;
  display: flex;
  flex-direction: column;
  border: 2px solid grey;
  justify-content: center;
  align-items: center;
`;
function Sidebar() {

  const pathName = useLocation().pathname;

  const menus = [
    { name: '마이 페이지', path: '/my_page' },
    { name: '포트폴리오', path: '/portfolio' },
    { name: '팔로잉', path: '/following' },
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
