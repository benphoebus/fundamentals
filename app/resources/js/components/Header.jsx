import React from 'react'
import { FaMoon } from 'react-icons/fa';

function Header() {
  return (
    <>
      <div>Header</div>
      <header className='header' data-testid='header'>
        <nav>
          <div className="logo">
            <img src="/image/logo.png" alt="funthamentals" />
          </div>
          <div className="settings">
            <ul>
              <li>+</li>
              <li>
                <FaMoon />
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>    
  )
}

export default Header