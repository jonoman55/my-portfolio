import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Website Portfolio
      </SectionTitle>
      <SectionText>
        I am a passionate developer looking to apply my skills and grow my career in the tech industry.
      </SectionText>
      <Button onClick={() => window.location = 'mailto:jonoman55@yahoo.com'}>Contact me</Button>
    </LeftSection>
  </Section>
);

export default Hero;