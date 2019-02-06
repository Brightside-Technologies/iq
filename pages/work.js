import MainLayout from "../containers/MainLayout";
import Head from "../components/Head";
import Section from "../components/Section";
import PageTitleHeading from "../components/PageTitleHeading";
import AttentionBanner from "../components/AttentionBanner";
import MarkedContent from "../components/MarkedContent";
import BookMedia from "../components/BookMedia";

export default function WorkPage(props) {
    const {title, description, content, works} = props;
    return (
        <MainLayout>
            <Head description={description} title={`${title} | La Isabel Quintero`} />
            <AttentionBanner>
                <PageTitleHeading title={title} />
                <MarkedContent source={content} />
            </AttentionBanner>
            <Section>
                {works.map((work, i) => (
                    <BookMedia key={i} {...work} />
                ))}
            </Section>
        </MainLayout>
    );
}

WorkPage.getInitialProps = async () => {
    const data = await import("../_data/_pages/_work.json");
    return data.default;
};
