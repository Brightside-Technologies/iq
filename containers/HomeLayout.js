import React from "react";
import Head from "../components/Head";
import Nav from "../components/Nav";
import css from "../styles/site.scss";

export default ({children, metadata}) => {
    return (
        <div className="root">
            <Head />
            <header>
                <Nav {...metadata} />
            </header>
            <main className="main">{children}</main>
        </div>
    );
};
