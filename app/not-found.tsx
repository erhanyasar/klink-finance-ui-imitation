"use client";

import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <p>Not Found: Could not find requested resource</p>
      <br />
      <Link href="/">
        <b>Return Home</b>
      </Link>
    </div>
  );
};

export default NotFound;