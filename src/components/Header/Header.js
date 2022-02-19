import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillFacebook } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const Header = () => {
  const isBreakpoint = useMediaQuery(768);
  return (
    <Container>
      <Div1>
        <Link href='/'>
          <a style={{ display: 'flex', alignItems: 'center', color: 'white', margin: '20px' }}>
            <DiCssdeck size='3rem' /> <Span>Portfolio</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href='#projects'>
            <NavLink style={{ margin: '1rem' }}>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href='#tech'>
            <NavLink style={{ margin: '1rem' }}>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href='#about'>
            <NavLink style={{ margin: '1rem' }}>About</NavLink>
          </Link>
        </li>
      </Div2>
      <SocialIconsDiv isBreakpoint={isBreakpoint} />
    </Container>
  );
};

const SocialIconsDiv = ({ isBreakpoint }) => (
  <Div3>
    <SocialIcons href='https://github.com/jonoman55/' target='_blank'>
      <AiFillGithub size='3rem' />
    </SocialIcons>
    <SocialIcons href='https://www.linkedin.com/in/john-chiappetta-ab4091143/' target='_blank'>
      <AiFillLinkedin size='3rem' />
    </SocialIcons>
    {isBreakpoint && (
      <>
        <SocialIcons href='https://www.instagram.com/johnch1p/' target='_blank'>
          <AiFillInstagram size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://twitter.com/johnch1p/' target='_blank'>
          <AiFillTwitterCircle size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://www.facebook.com/johnchip1255/' target='_blank'>
          <AiFillFacebook size='3rem' />
        </SocialIcons>
      </>
    )}
  </Div3>
);

export default Header;