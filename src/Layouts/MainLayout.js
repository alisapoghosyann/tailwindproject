import Footer from "@/components/footer";
import Nav from "@/components/navigation";
import SEO from "@/components/SEO";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import React from "react";

const MainLayout = ({ children, metaData }) => {
  const scrollDirection = useScrollDirection();

  return (
    <>
      <SEO metaData={metaData} />
      <div>
        <Nav scrollDirection={scrollDirection} />
        <div className={scrollDirection ? "" : "pt-12 md:pt-28"}>{children}</div>
        <Footer/>
      </div>
    </>
  );
};

export default MainLayout;
