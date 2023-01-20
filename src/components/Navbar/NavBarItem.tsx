import React from 'react';

const NavBarItem = () => {
  return (
    <li>
      <a
        href="/"
        className="block py-2 pl-3 pr-4 text-white rounded bg-transparent md:p-0 "
        aria-current="page"
      >
        Home
      </a>
    </li>
  );
};

export default NavBarItem;
