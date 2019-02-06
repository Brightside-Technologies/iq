import HomeHero from "../components/HomeHero";
import HomeLayout from "../containers/HomeLayout";
import Head from "../components/Head";

import "../styles/site.scss";

export default function HomePage(props) {
    const {title, description, greeting, tagline, profile_image} = props;
    return (
        <HomeLayout>
            <Head description={description} title={`${title} | La Isabel Quintero`}>
                <script
                    type="text/javascript"
                    src="https://identity.netlify.com/v1/netlify-identity-widget.js"
                />
            </Head>
            <HomeHero greeting={greeting} tagline={tagline} image={profile_image} />
        </HomeLayout>
    );
}

HomePage.getInitialProps = async () => {
    const data = await import("../_data/_pages/_home.json");
    return data.default;
};
