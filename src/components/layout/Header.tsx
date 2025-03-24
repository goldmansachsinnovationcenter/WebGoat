import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import '../../assets/css/main.css';

const Header: React.FC = () => {
  const { username, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header id="header">
      <div className="brand">
        <Link to="/" className="logo"><span>Web</span>Goat</Link>
      </div>
      <div id="lesson-title-wrapper"></div>
      <div style={{ position: 'absolute', width: '600px', zIndex: 3, top: '22px', right: '-90px' }}>
        <input className="form-control" type="text" id="search" name="search" placeholder="Search menu" style={{ width: '200px', display: 'inline-block' }} />
        
        {/* WebWolf button */}
        <a href="#" target="_blank">
          <button type="button" id="webwolf-button" className="btn btn-default right_nav_button" title="WebWolf">
            <img src="/assets/images/wolf.svg" alt="WebWolf" />
          </button>
        </a>
        
        {/* User menu */}
        <div className="btn-group">
          <div className="dropdown" style={{ display: 'inline' }}>
            <button type="button" data-toggle="dropdown" className="btn btn-default dropdown-toggle" id="user-menu">
              <i className="fa fa-user"></i> <span className="caret"></span>
            </button>
            <ul className="dropdown-menu dropdown-menu-left">
              <li role="presentation"><a role="menuitem" tabIndex={-1} href="#" onClick={handleLogout}>Logout</a></li>
              <li role="presentation" className="divider"></li>
              <li role="presentation" className="disabled"><a role="menuitem" tabIndex={-1} href="#">User: {username || 'Guest'}</a></li>
              <li role="presentation" className="disabled"><a role="menuitem" tabIndex={-1} href="#">Role: User</a></li>
              <li role="presentation" className="divider"></li>
              <li role="presentation" className="disabled"><a role="menuitem" tabIndex={-1} href="#">Version: 2023.01</a></li>
              <li role="presentation" className="disabled"><a role="menuitem" tabIndex={-1} href="#">Build: 123</a></li>
            </ul>
          </div>
        </div>
        
        {/* Language selector */}
        <div className="btn-group">
          <div className="dropdown" style={{ display: 'inline' }}>
            <button type="button" data-toggle="dropdown" className="btn btn-default dropdown-toggle" id="language-menu">
              <i className="fa fa-flag"></i> <span className="caret"></span>
            </button>
            <ul className="dropdown-menu dropdown-menu-left">
              <li role="presentation"><a role="menuitem" tabIndex={-1} href="#"><img src="/assets/images/enlang.svg" alt="English"/> English</a></li>
              <li role="presentation"><a role="menuitem" tabIndex={-1} href="#"><img src="/assets/images/eslang.svg" alt="Spanish"/> Spanish</a></li>
              <li role="presentation"><a role="menuitem" tabIndex={-1} href="#"><img src="/assets/images/frlang.svg" alt="French"/> French</a></li>
              <li role="presentation"><a role="menuitem" tabIndex={-1} href="#"><img src="/assets/images/delang.svg" alt="German"/> German</a></li>
              <li role="presentation"><a role="menuitem" tabIndex={-1} href="#"><img src="/assets/images/nllang.svg" alt="Dutch"/> Dutch</a></li>
              <li role="presentation"><a role="menuitem" tabIndex={-1} href="#"><img src="/assets/images/cnlang.svg" alt="Chinese"/> Chinese</a></li>
            </ul>
          </div>
        </div>
        
        {/* About button */}
        <button type="button" className="btn btn-default right_nav_button" data-toggle="modal" data-target="#about-modal">
          <i className="fa fa-info"></i>
        </button>
        
        {/* Contact button */}
        <a href="mailto:webgoat@owasp.org?Subject=WebGoat%20feedback" target="_blank">
          <button type="button" className="btn btn-default right_nav_button">
            <i className="fa fa-envelope"></i>
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
