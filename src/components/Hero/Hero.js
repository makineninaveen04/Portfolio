import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
   <Section row nopadding>
      <LeftSection>
         <SectionTitle main center>
            welcome To <br />
            My Personal Portfolio
         </SectionTitle>
         <SectionText>
            To improve my skills i am doing projects
         </SectionText>
         <Button onClick={() => window.location = "https://google.com"}>Learn More </Button>
      </LeftSection>
   </Section>
);

export default Hero;