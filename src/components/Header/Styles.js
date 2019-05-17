import styled from 'styled-components';

const Wrap = styled.div`
  display: block;
  width: 70%;
  margin-right: auto;
  margin-bottom: 50px;
  margin-left: auto;
  text-align: center;
`;

export {
  Wrap,
  Nav, NavHeader, NavLeft, NavCenter, NavRight, MenuLink,
};

const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;

const NavHeader = styled.div`
  max-width: 1010px;
  padding: 0px 10px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 0 0 0 ;
`;

const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
`;

const NavCenter = styled.div`
  width: 33.333%;
  text-align: center;
`;

const NavRight = styled.div`
  width: 33.333%;
  text-align: right;

  svg {
    margin-right: 20px;
  }
`;

const MenuLink = styled.div`
color: black;
`;
