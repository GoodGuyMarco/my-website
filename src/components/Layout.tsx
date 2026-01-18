import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main className="h-full text-base">{children}</main>
    </>
  );
};

export default Layout;
