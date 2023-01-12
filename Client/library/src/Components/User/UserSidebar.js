import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex',position:'fixed', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            MyBooks
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/user/bookIndex" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book">Books</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/user/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">My profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/user/myBook" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">My history</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/user/feedback" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="box">FeedBack</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/logout" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="circle">Logout</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Happy Reading
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;