import React from "react";

import Logo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <LogoImg src={Logo} alt='logo' />
      <TMDBLogoImg src={TMDBLogo} alt='TMDB Logo' />

    </Content>
    
  </Wrapper>
);

export default Header;