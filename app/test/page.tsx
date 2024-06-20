import Link from "next/link";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Link href={"/"}>Go to Home Page</Link>
      </div>
    </main>
  );
};

export default page;
