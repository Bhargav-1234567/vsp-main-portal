import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useGetInitialDataQuery } from "../store/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { initialSiteData } from "../store/jsonSlice";
import StaticJson from "../utils/data.json";
import TopHeader from "./TopHeader";
import InfinityRippleButton from "./InfinityRippleButton";

const Layout = () => {
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { data: initialJson, error } = useGetInitialDataQuery();
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

  useEffect(() => {
    if (error) {
      dispatch(initialSiteData(StaticJson));
    }
  }, [error]);

  return (
    <div className="layout">
      <div className="inquiry-btn-section">
        <InfinityRippleButton />{" "}
      </div>

      <Header isScrolled={isScrolled} currentPath={location.pathname} />
      <TopHeader />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
