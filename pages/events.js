import MainLayout from "../containers/MainLayout";
import Head from "../components/Head";
import Section from "../components/Section";
import AttentionBanner from "../components/AttentionBanner";
import EventMedia from "../components/EventMedia";
import PageTitleHeading from "../components/PageTitleHeading";
import MarkedContent from "../components/MarkedContent";
import isAfter from "date-fns/is_after";
import styled from "styled-components";

const Notification = styled.div`
    background-color: rgba(96, 60, 84, 0.75) !important;
    font-size: 18px;
`;

export default function EventsPage({data, metadata}) {
    const {title, description, content, events} = data;
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
                {events
                    .sort((a, b) => new Date(a.start) - new Date(b.start))
                    .filter(
                        event =>
                            isAfter(new Date(event.start), new Date()) &&
                            isAfter(new Date(event.end), new Date())
                    )
                    .map((event, i) => (
                        <EventMedia
                            key={i}
                            title={event.title}
                            image={event.photo_url}
                            description={event.description}
                            location={event.location}
                            address={event.address}
                            start={event.start}
                            end={event.end}
                            url={event.url}
                        />
                    ))}
            </Section>
        </MainLayout>
    );
}

EventsPage.getInitialProps = async () => {
    const dataAsync = import("../_data/_pages/_events.json");
    const metadataAsync = import("../_data/_metadata.json");

    const data = await dataAsync;
    const metadata = await metadataAsync;

    return {
        data: data.default,
        metadata: metadata.default
    };
};
