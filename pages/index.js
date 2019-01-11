import HomeHero from "../components/HomeHero";
import HomeLayout from "../containers/HomeLayout";

import "../styles/site.scss";

const HomePage = () => (
    <HomeLayout>
        <HomeHero />
    </HomeLayout>
);

export default HomePage;
