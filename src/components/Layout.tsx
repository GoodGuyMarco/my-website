import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <main className="h-full text-base">{children}</main>
    </>
  );
};

export default Layout;
