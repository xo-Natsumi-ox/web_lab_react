import React from 'react';
import facebook from "../images/social/facebook.png"
import linkedin from "../images/social/linkedin.png"
import youtube from "../images/social/youtube.png"
import instagram from "../images/social/instagram.png"
import { FooterStyle, FooterTextStyle, FooterIconPosition, ContainerFooterStyle, FooterIcon } from "../styles/Footer.styled"
import { ContainerStyle } from "../styles/General.styled"

function Footer() {
    return (
        <FooterStyle>
            <ContainerStyle>
                <ContainerFooterStyle>
                <div>
                    <FooterTextStyle>Just wanted to say thank you for your purchase. We’re so lucky to have customers like you!</FooterTextStyle>
                    <FooterTextStyle>Copyright © 2020 IoT. All rights reserved.</FooterTextStyle>
                </div>
                <FooterIconPosition>
                    <FooterIcon>
                            <a href="https://www.facebook.com"><img src={facebook} width="20px"/></a>
                            <a href="https://www.linkedin.com/"><img src={linkedin} width="30px"/></a>
                            <a href="https://www.youtube.com/"><img src={youtube} width="20px"/></a>
                            <a href="https://www.instagram.com/"><img src={instagram} width="20px"/></a>
                    </FooterIcon>
                </FooterIconPosition>
                </ContainerFooterStyle>
            </ContainerStyle>
        </FooterStyle>
    );
}

export default Footer;

