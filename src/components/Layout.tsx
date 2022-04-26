import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <main className="h-full">{children}</main>
    </>
  );
};

export default Layout;
