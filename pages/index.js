import HomeHero from "../components/HomeHero";
import HomeLayout from "../containers/HomeLayout";
import Head from "../components/Head";

import "../styles/site.scss";

export default function HomePage({data, metadata}) {
    const {title, description, greeting, tagline, profile_image} = data;
    return (
        <HomeLayout metadata={metadata}>
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
    const dataAsync = import("../_data/_pages/_home.json");
    const metadataAsync = import("../_data/_metadata.json");

    const data = await dataAsync;
    const metadata = await metadataAsync;

    return {
        data: data.default,
        metadata: metadata.default
    };
};
