import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "test page",
  description: "This is a test page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
