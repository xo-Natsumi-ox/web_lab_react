import styled from 'styled-components';
import Icon from '@ant-design/icons';

export const FooterBody = styled.div`
padding-top:20px;
background-color:#9900CC;
padding-bottom:30px;
`

export const IconStyle = styled(Icon)`
margin:10px;
font-size:20px;
color: ${({color}) => color};
`
export const SocialMediaStyle = styled.div`
display:flex;
margin:auto;
`
export const Copyright = styled.p`
font-size:10px;
text-align:center;
`

export const FooterP = styled.p`
font-size:18px;
margin-top:6px;
`

export const IconsStyle = styled.div`
display:flex;
align-items:space-between;
margin-top:25px;
margin-left: 380px;
`

export const FooterText = styled.div`
font-size:18px;
width:330px;
margin-right: 380px;
`

export const FooterStyle = styled.div`
display:flex;
align-items:space-between;
margin-left: auto;
margin-right: auto;
`
