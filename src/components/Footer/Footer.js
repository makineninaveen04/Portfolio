import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
   return (
      <FooterWrapper>
         <LinkList>
            <LinkColumn>
               <LinkTitle>Call</LinkTitle>
               <LinkItem href="tel:9849612692">9849612692</LinkItem>
            </LinkColumn>
            <LinkColumn>
               <LinkTitle>EMail</LinkTitle>
               <LinkItem href="mailto:makineni472@gmail.com">makineni472@gmail.com</LinkItem>
            </LinkColumn>
         </LinkList>
         <SocialIconsContainer>
            <CompanyContainer>
               <Slogan>Innovating one project at a time </Slogan>
            </CompanyContainer>
            <SocialContainer>
               <SocialIcons href="https://github.com">
                  <AiFillGithub size="3rem" />
               </SocialIcons>
               <SocialIcons href="https://linkedin.com">
                  <AiFillLinkedin size="3rem" />
               </SocialIcons>
               <SocialIcons href="https://instagram.com">
                  <AiFillInstagram size="3rem" />
               </SocialIcons>
            </SocialContainer>
         </SocialIconsContainer>
      </FooterWrapper>
   );
};

export default Footer;
