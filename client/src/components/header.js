import React from 'react'
import styled from 'styled-components'
import LogoImage from '../assets/images/logo.png'
import theme from './theme'
import { useStateValue } from '../state'
import { logout } from '../state/auth/actions'
import Button from './button'
import { NavLink } from 'react-router-dom'
import './profileNavLink.css'


const Nav = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;    
  background: ${theme.colors.background};
  position: ${props => props.fixed ? 'fixed' : 'relative'};
`;

const Right = styled.nav`
  flex: 1;
  text-align: right;
`;

const Logo = styled.img`
   margin: 40;
   width: 100px;
`;


const Header = (props) => {
  const [{auth}, dispatch] = useStateValue();
 
  const handleLogout = async () => {
    await dispatch(logout())
  };

  return (
    <Nav>
      <Logo src={LogoImage} alt='Logo Spotify' />
      {
        auth.logged &&
          <Right>
           <NavLink className = "profileNavLink" activeStyle={{ color: 'white', font: 'bold'}} exact activeClassName="active" to = "/profile">Profile</NavLink>
       
            <Button primary onClick={() => handleLogout()}>Logout</Button>
          </Right>
      }
    </Nav>
  )
}


export default Header