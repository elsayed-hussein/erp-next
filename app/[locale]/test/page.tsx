import Link from "next/link";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main>
      <div>
        <h1>This is Test Page</h1>
        <Link href={"/"}>Go to Home Page</Link>
      </div>
      <div>
        <Link href={"/en/test"}>En</Link>
      </div>
      <div>
        <Link href={"/ar/test"}>Ar</Link>
      </div>
    </main>
  );
};

export default page;
