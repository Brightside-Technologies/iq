import MainLayout from "../containers/MainLayout";
import EventMedia from "../components/EventMedia";
import PageTitleHeading from "../components/PageTitleHeading";

import eventsData from "../data/events.json";

export default function EventsPage() {
    return (
        <MainLayout>
            <section className="section">
                <PageTitleHeading title="Events" />
                <div className="container content is-medium">
                    <p>
                        The Owl always takes her sleep during the day. Then after sundown, when the
                        rosy light fades from the sky and the shadows rise slowly through the wood,
                        out she comes ruffling and blinking from the old hollow tree. Now her weird
                        "hoo-hoo-hoo-oo-oo" echoes through the quiet wood, and she begins her hunt
                        for the bugs and beetles, frogs and mice she likes so well to eat.
                    </p>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    {eventsData
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
                </div>
            </section>
        </MainLayout>
    );
}
