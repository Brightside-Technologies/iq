import MainLayout from "../containers/MainLayout";
import Head from "../components/Head";
import Section from "../components/Section";
import PageTitleHeading from "../components/PageTitleHeading";
import AttentionBanner from "../components/AttentionBanner";
import MarkedContent from "../components/MarkedContent";
import BookMedia from "../components/BookMedia";
import styled from "styled-components";

const Notification = styled.div`
    background-color: rgba(96, 60, 84, 0.75) !important;
    font-size: 18px;
`;

export default function WorkPage({data, metadata}) {
    const {title, description, content, works} = data;
    return (
        <MainLayout metadata={metadata}>
            <Head description={description} title={`${title} | La Isabel Quintero`} />
            <AttentionBanner>
                <PageTitleHeading title={title} />
                <Notification className="notification">
                    <MarkedContent source={content} />
                </Notification>
            </AttentionBanner>
            <Section>
                {/* TODO: sort by date desc */}
                {works.map((work, i) => (
                    <BookMedia key={i} {...work} />
                ))}
            </Section>
        </MainLayout>
    );
}

WorkPage.getInitialProps = async () => {
    const dataAsync = import("../_data/_pages/_work.json");
    const metadataAsync = import("../_data/_metadata.json");

    const data = await dataAsync;
    const metadata = await metadataAsync;

    return {
        data: data.default,
        metadata: metadata.default
    };
};
