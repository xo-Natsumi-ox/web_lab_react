import React, { Component } from 'react'
import {
    YoutubeOutlined,
    SkypeOutlined,
    FacebookOutlined,
    LinkedinOutlined
  } from "@ant-design/icons";
import Logo from '../images/logo.png'
import {IconStyle, SocialMediaStyle, Copyright, FooterText, FooterP, IconsStyle, FooterStyle, FooterBody} from '../styles/footer.styles.js';

function Footer() {
    return (
        <FooterBody>
        <footer>
            <div className="socialmedia">
                <SocialMediaStyle>
                    <FooterStyle>
                        <FooterText>
                            <div>
                                <p>
                                    Just wanted to say thank you for your purchase. We’re so lucky to have customers like you!
                                </p>
                            </div>
                        </FooterText>
                    <img src = { Logo } height="100px" />
                    <IconsStyle>
                        <FooterP>
                            You can find us here:
                        </FooterP>
                        <IconStyle component = { YoutubeOutlined } color='#FF0000'/>
                        <IconStyle component = { FacebookOutlined } color='darkblue'/>
                        <IconStyle component = { LinkedinOutlined } color='teal'/>
                        <IconStyle component = { SkypeOutlined } color='#00aff0'/>
                    </IconsStyle>
                    </FooterStyle>

                </SocialMediaStyle>
            </div>
            <Copyright>Copyright © 2020 IoT. All rights reserved.</Copyright>
        </footer>
        </FooterBody>
    )
}

export default Footer
