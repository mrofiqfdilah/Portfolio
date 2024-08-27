import React from "react";
import Sidebar from "../component/Sidebar";
import Hero from "../component/Hero";
import Tech from "../component/Tech";
import Project from "../component/Project";
import Award from "../component/Award";
import Footer from "../component/Footer";

function Home()
{
    return (
        <>
        <Sidebar />
        <Hero />
        <Tech />
        <Project />
        <Award />
        <Footer />
        </>
    )
}

export default Home;