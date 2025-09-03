import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useGetInitialDataQuery } from "../store/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { initialSiteData } from "../store/jsonSlice";

const Layout = () => {
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { data: initialJson } = useGetInitialDataQuery();
  console.log({ initialJson });
  useEffect(() => {
    if (initialJson) {
      dispatch(initialSiteData(initialJson));
    }
  }, [initialJson]);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="layout">
      <Header isScrolled={isScrolled} currentPath={location.pathname} />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
