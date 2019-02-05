import MainLayout from "../containers/MainLayout";
import Head from "../components/Head";
import Section from "../components/Section";
import AwardsList from "../components/AwardsList";
import PageTitleHeading from "../components/PageTitleHeading";
import AttentionBanner from "../components/AttentionBanner";
import MarkedContent from "../components/MarkedContent";
import Blockquote from "../components/Blockquote";

export default function BioPage({page}) {
    const {title, description, awards, blockquote, about_me} = page;
    return (
        <MainLayout>
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
                                    <p className="title">About Me</p>
                                    <MarkedContent source={about_me} />
                                </article>
                            </div>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child notification has-background-grey-lighter">
                                <p className="title">Education</p>
                                <div className="content">
                                    <p>Education details go here</p>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child notification has-background-grey-lighter">
                            <div className="content">
                                <p className="title mb-3">Awards</p>
                                <p className="subtitle">&amp; Honors</p>
                                <AwardsList awards={awards} />
                            </div>
                        </article>
                    </div>
                </div>
            </Section>
        </MainLayout>
    );
}

BioPage.getInitialProps = async () => {
    const data = await import("../_data/_pages/_bio.json");
    return data.default;
};
