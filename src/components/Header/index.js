import React, {useContext} from "react";
import { Link } from "react-router-dom";
// Logos
import Logo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
// Styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";
// Context
import { Context } from "../../context";

const Header = () => {
  const [user] = useContext(Context);
  console.log(user);
  
  return (
    <Wrapper>
      <Content>
        <Link to='/'>
          <LogoImg src={Logo} alt='logo' />
        </Link>
        {user ? (
          <span>{user.username} is logged in.</span>
        ) : (
          <span><Link to='/login'>Log In</Link></span>
        )

        }

        <TMDBLogoImg src={TMDBLogo} alt='TMDB Logo' />

      </Content>
      
    </Wrapper>
  );
}

export default Header;