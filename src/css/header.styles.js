import styled from 'styled-components';
import { NavLink } from 'reactstrap';

export const HeaderBody = styled.div`
padding-top:20px;
background-color:#9900CC;
margin-left:auto;
margin-right:auto;
`

export const HeaderStyle = styled.div`
display:flex;
align-items:space-between;
`

export const NavStyle = styled.div`
display:flex;
align-items:space-between;
list-style-type: none;
`
export const NavLinks = styled(NavLink)`
margin-left:15px;
text-decoration:none;
color:black;
font-size:30px;
`