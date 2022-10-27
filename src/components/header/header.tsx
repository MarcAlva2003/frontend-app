import { HeaderStyle } from "./header-style";
import { Heading1 } from "../../ui/styles/typography";
import { useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../services/auth";
import { SESSION_COOKIE_NAME } from "../../services/auth";
import Cookies from 'js-cookie';

export const Header = () => {
  const isLogged = isAuthenticated();
  const handleLogout = () => {
    Cookies.remove(SESSION_COOKIE_NAME)
    window.location.href = '/';
  }

  
  return(
    <HeaderStyle>
      <div className="header-background">
        <header className="header-content">
          <div className="header-left">
            <div className="header-left-logo">
              <a href="/">
                <Heading1>
                  WHERE´S MY COMPANY
                </Heading1>
              </a>
            </div>
          </div>
          <div className="header-right">
            <div className="navbar-container">
              <nav>
                <ul>
                  <li>
                    <a href="">
                      <p>COMPANIES LIST</p>
                    </a>
                  </li>
                  {isLogged && (
                    <li>
                      <a href="">PROFILE</a>
                    </li>
                  )}
                  {isLogged && (
                    <li>
                      <p className="logoit" onClick={handleLogout}>LOGOUT</p>
                    </li>
                  )}
                  {!isLogged && (
                    <li>
                      <Link to="/login">LOGIN</Link>
                    </li>
                  )}
                  {!isLogged && (
                    <li>
                      <a href="">REGISTER</a>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </div>
    </HeaderStyle>
  )
}