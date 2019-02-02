import HomeHero from "../components/HomeHero";
import HomeLayout from "../containers/HomeLayout";
import Head from "../components/Head";

import "../styles/site.scss";

export default function HomePage({page}) {
    const {title, description, greeting, tagline, profile_image} = page;
    return (
        <HomeLayout>
            <Head description={description} title={`${title} | La Isabel Quintero`} />
            <HomeHero greeting={greeting} tagline={tagline} image={profile_image} />
        </HomeLayout>
    );
}

HomePage.getInitialProps = async () => {
    const data = await import("../_data/_home.json");
    return data.default;
};
