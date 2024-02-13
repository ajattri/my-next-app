// src/pages/index.js

import React from "react";
import Link from "next/link";

const HomePage = () => {
  const pageText = {
    welcome: "Welcome to My Next.js Site!",
    home: "Go to Home Page",
    products: "Check our products here..",
  };
  return (
    <div>
      <h1>{pageText.welcome}</h1>
      <Link href="/home">
        <span>{pageText.home}</span>
      </Link>
      <div>
        <Link href="/products">
          <span>{pageText.products}</span>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
