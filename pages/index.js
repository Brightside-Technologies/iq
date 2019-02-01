import HomeHero from "../components/HomeHero";
import HomeLayout from "../containers/HomeLayout";
import Head from "../components/Head";

import "../styles/site.scss";

const HomePage = () => (
    <HomeLayout>
        <Head description="" title={`Welcome! | La Isabel Quintero`} />
        <HomeHero />
    </HomeLayout>
);

export default HomePage;
