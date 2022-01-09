import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SidebarItem from './SidebarItem';

const Side = styled.div`
  display: flex;
  width: 18.75em;
  height: 43.75em;
  align-items: center;
  justify-content: center;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  height: 40.5em;
  width: 18.25em;
  background-color: #ffffff;
  border: 0.5em solid #017865;
  justify-content: center;
  align-items: center;
`;

const Sidebar = () => {
  const pathName = useLocation().pathname;

  const menus = [
    { name: '마이 페이지', path: '/menu/mypage' },
    { name: '포트폴리오', path: '/menu/portfolio' },
    { name: '팔로잉', path: '/menu/following' },
  ];
  return (
    <Side>
      <Menu>
        {menus.map((menu, index) => {
          return (
            <NavLink
              exact
              style={{
                color: '#004225',
                fontSize: '1.8em',
                textDecoration: 'none',
              }}
              to={menu.path}
              key={index}
            >
              <SidebarItem
                menu={menu}
                isActive={pathName === menu.path ? true : false}
              />
            </NavLink>
          );
        })}
      </Menu>
    </Side>
  );
};

export default Sidebar;
