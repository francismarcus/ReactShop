import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {
  Wrap,
  Nav,
  NavHeader,
  NavLeft,
  NavCenter,
  NavRight,
  MenuLink
} from 'components/Header/Styles';

const Img = styled.img `
height: 140px;
`
export default function Header() {
  return (
    <>
    <Nav>
    <NavHeader>
    <NavLeft>
      <Link to='/'>
        <Img src="http://www.greatercph.com/startup/~/media/campaign%20portal/startup/logo_col/soundboks_logo.ashx?la=en&hash=C3D22725ED8FF9B4CF78A43F290CE3775CC1AB00"/>
      </Link>
    </NavLeft>
    <NavCenter></NavCenter>
    <NavRight>
      <Link to='/Cart'>
        <MenuLink>
          <i class="large shopping cart icon"/>
        </MenuLink>
      </Link>
    </NavRight>
  </NavHeader>
   < /Nav>

<Wrap></Wrap > </>);
}
