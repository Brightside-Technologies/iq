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
`;

export default function WorkPage(props) {
    const {title, description, content, works} = props;
    return (
        <MainLayout>
            <Head description={description} title={`${title} | La Isabel Quintero`} />
            <AttentionBanner>
                <PageTitleHeading title={title} />
                <Notification className="notification">
                    <MarkedContent source={content} />
                </Notification>
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
