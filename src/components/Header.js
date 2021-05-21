import logo from '../images/header-vector.svg';

function Header() {
    return (
      <header className="header">
        <img className="header__vector" src={logo} alt="Around The U.S." />
      </header>
    );
  }
  
  export default Header;