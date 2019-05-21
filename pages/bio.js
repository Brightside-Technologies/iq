import MainLayout from "../containers/MainLayout";
import Head from "../components/Head";
import Section from "../components/Section";
import AwardsList from "../components/AwardsList";
import PageTitleHeading from "../components/PageTitleHeading";
import AttentionBanner from "../components/AttentionBanner";
import MarkedContent from "../components/MarkedContent";
import Blockquote from "../components/Blockquote";
import styled from "styled-components";

const Img = styled.img`
    object-fit: cover;
`;

export default function BioPage({data, metadata}) {
    const {title, description, awards, blockquote, about_me} = data;
    return (
        <MainLayout metadata={metadata}>
            <Head description={description} title={`${title} | La Isabel Quintero`} />
            <AttentionBanner>
                <PageTitleHeading title={title} />
                <Blockquote context="is-link" citation={blockquote.source}>
                    <MarkedContent source={blockquote.content} />
                </Blockquote>
            </AttentionBanner>
            <Section>
                <div className="tile is-ancestor">
                    <div className="tile is-vertical is-8">
                        <div className="tile">
                            <div className="tile is-parent">
                                <article className="tile is-child notification has-background-grey-lighter">
                                    <MarkedContent source={about_me} />
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="tile is-vertical is-parent">
                        <article
                            style={{minHeight: 300}}
                            className="is-clipped tile is-child notification has-background-grey-lighter">
                            <div className="is-overlay is-clipped">
                                <figure className="image is-square">
                                    <Img src="https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
                                </figure>
                            </div>
                        </article>
                        <article
                            style={{minHeight: 300}}
                            className="is-clipped tile is-child notification has-background-grey-lighter">
                            <div className="is-overlay is-clipped">
                                <figure className="image is-square">
                                    <Img src="https://spacehold.it/1600x900/1.jpg" />
                                </figure>
                            </div>
                        </article>
                        <article
                            style={{minHeight: 300}}
                            className="is-clipped tile is-child notification has-background-grey-lighter">
                            <div className="is-overlay is-clipped">
                                <figure className="image is-square">
                                    <Img src="https://images.pexels.com/photos/754082/pexels-photo-754082.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                                </figure>
                            </div>
                        </article>
                    </div>
                </div>
            </Section>
        </MainLayout>
    );
}

BioPage.getInitialProps = async () => {
    const dataAsync = import("../_data/_pages/_bio.json");
    const metadataAsync = import("../_data/_metadata.json");

    const data = await dataAsync;
    const metadata = await metadataAsync;

    return {
        data: data.default,
        metadata: metadata.default
    };
};
