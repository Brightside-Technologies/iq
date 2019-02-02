import MainLayout from "../containers/MainLayout";
import Head from "../components/Head";
import Section from "../components/Section";
import AttentionBanner from "../components/AttentionBanner";
import EventMedia from "../components/EventMedia";
import PageTitleHeading from "../components/PageTitleHeading";
import MarkedContent from "../components/MarkedContent";

export default function EventsPage({page}) {
    const {title, description, content, events} = page;
    return (
        <MainLayout>
            <Head description={description} title={`${title} | La Isabel Quintero`} />
            <AttentionBanner>
                <PageTitleHeading title={title} />
                <MarkedContent source={content} />
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
    const data = await import("../_data/_events.json");
    return data.default;
};
