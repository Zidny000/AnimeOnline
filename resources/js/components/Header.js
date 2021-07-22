
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className="Header">
            <div id="preloder">
                <div className="loader"></div>
            </div>
            <header className="header">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-2">
                            <div class="header__logo">
                                <a href="/">                                    
                                    <img src="img/logo.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="header__nav">
                                <nav class="header__menu mobile-menu">
                                    <ul>
                                        <li class="active">
                                            
                                            <Link to="/">Homepage</Link>
                                        </li>
                                        <li>
                                            <a >
                                                Categories{" "}
                                                <span class="arrow_carrot-down"></span>
                                            
                                            </a>
                                               
                                            <ul class="dropdown">
                                                <li>
                                                    <Link to="/categories/Romance">
                                                        Romance
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/categories/Slice of life">
                                                        Slice of life
                                                        
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/categories/Adventure">
                                                        Adventure
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/categories/Fantasy">
                                                       Fantasy
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/categories/Action">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/categories/Magic">
                                                        Magic
                                                    </Link>
                                                </li>
                                               
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="/blog">Our Blog</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Contacts</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div class="header__right">
                                <a href="#" class="search-switch">
                                    <span class="icon_search"></span>
                                </a>
                                <Link to="/login">
                                    <span class="icon_profile"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div id="mobile-menu-wrap"></div>
                </div>
            </header>
        </div>
    );
};

export default Header;
