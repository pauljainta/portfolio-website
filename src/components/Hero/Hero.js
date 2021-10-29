import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 
  <Section row nopaddng>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/> My Personal Portfolio
      </SectionTitle>
      <SectionText>
        This is my personal portfolio website.It contains my academic acheievments , academic and personal projects,
        and description about myself.
        <Button onClick={()=> window.location='https://www.buet.ac.bd/web/#/'}>Learn More</Button>
      </SectionText>
    </LeftSection>

  </Section>
);

export default Hero;