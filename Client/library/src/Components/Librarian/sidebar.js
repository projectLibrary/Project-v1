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
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            MyBooks
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/librarian/bookIndex" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book">All Books</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/librarian/users" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="users">Users</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/librarian/addBook" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="plus">Add Books</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/librarian/Issuedbooks" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Issuedbooks</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/librarian/currentIssued" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Current Issued</CDBSidebarMenuItem>
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
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;