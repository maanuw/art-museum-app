/**
 * @file Navbar Component for the site.
 * @author Manav Patel <mpate136@uottawa.ca>
 */

import {useState} from 'react';
import Button from './Button';

import '../styles/components/Navbar.css';

function Navbar() {

  const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
      <nav className='navigation'>
        <button className="hamburger" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
          <ul>
            <li>
              <Button text={'Gallery'} className={'nav-btn'}/>
            </li>
            <li>
              <Button text={'About'} className={'nav-btn'}/>
            </li>
            <li>
              <Button text={'Donate'} className={'nav-btn'}/>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar;