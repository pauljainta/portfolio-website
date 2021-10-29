import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display:"flex",alignItems: "center", color:"white"}}>
          <DiCssdeck size="3em"/> <Span>My Portfolio</Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href="#academic_projects">
          <NavLink>Academic Projects</NavLink>
        </Link>
        </li>
        <li>
        <Link href="#personal_projects">
          <NavLink>Personal Projects</NavLink>
        </Link>
        </li>
        <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href="https://github.com/pauljainta">
        <AiFillGithub size="3em">
        </AiFillGithub>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/jainta-paul-1950a3158/">
        <AiFillLinkedin size="3em">
        </AiFillLinkedin>
      </SocialIcons>

      <SocialIcons href="https://www.facebook.com/jainta.paul.1">
        <AiFillFacebook size="3em">
        </AiFillFacebook>
      </SocialIcons>

    </Div3>
  </Container>
);

export default Header;
