
import React from "react";
import Link from "next/link";

const Layout = ({ children }) => {
    const welcomePageText = 'Welcome Page';
  return (
    <div>
      <Link href="/">
        <span>{welcomePageText}</span>
      </Link>
      {children}
    </div>
  );
};

export default Layout;