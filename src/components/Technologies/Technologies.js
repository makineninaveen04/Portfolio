import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
   <Section id="tech">
      <SectionDivider />
      <br />
      <SectionTitle>Technolagies</SectionTitle>
      <SectionText>I've worked with the range of technolagies in the  web  development World From Back-end to design</SectionText>
      <List>
         <ListItem>
            <DiReact size='3rem' />
            <ListContainer>
               <ListTitle>Front-End</ListTitle>
               <ListParagraph>Experience with <br />
                  React.Js
               </ListParagraph>
            </ListContainer>
         </ListItem>
         <ListItem>
            <DiReact size='3rem' />
            <ListContainer>
               <ListTitle>Front-End</ListTitle>
               <ListParagraph>Experience with <br />
                  Javascript
               </ListParagraph>
            </ListContainer>
         </ListItem>
         <ListItem>
            <DiZend size='3rem' />
            <ListContainer>
               <ListTitle>Front-End</ListTitle>
               <ListParagraph>Experience with <br />
                  Next.Js
               </ListParagraph>
            </ListContainer>
         </ListItem>
      </List>
   </Section>
);

export default Technologies;
