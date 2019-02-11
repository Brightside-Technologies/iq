import MainLayout from "../containers/MainLayout";
import Head from "../components/Head";
import Section from "../components/Section";
import AttentionBanner from "../components/AttentionBanner";
import EventMedia from "../components/EventMedia";
import PageTitleHeading from "../components/PageTitleHeading";
import MarkedContent from "../components/MarkedContent";
import styled from "styled-components";

const Notification = styled.div`
    background-color: rgba(96, 60, 84, 0.75) !important;
`;

export default function EventsPage(props) {
    const {title, description, content, events} = props;
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
                {events
                    .sort((a, b) => new Date(a.start) - new Date(b.start))
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
                            link={event.url}
                        />
                    ))}
            </Section>
        </MainLayout>
    );
}

EventsPage.getInitialProps = async () => {
    const data = await import("../_data/_pages/_events.json");
    return data.default;
};
