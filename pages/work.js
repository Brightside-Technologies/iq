import MainLayout from "../containers/MainLayout";
import BookMedia from "../components/BookMedia";
import PageTitleHeading from "../components/PageTitleHeading";
import AttentionBanner from "../components/AttentionBanner";

import workData from "../data/works.json";

export default function WorkPage() {
    const newBook = workData.filter(work => work.isNew)[0];
    return (
        <MainLayout>
            <section className="section">
                <PageTitleHeading title="Work" />
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
            <AttentionBanner>
                <div className="d-flex flex-column align-items-center">
                    <span className="tag is-warning is-large is-uppercase">New</span>
                    <h1 className="title">Lorem Ipsum</h1>
                    <h2 className="subtitle is-size-6 is-uppercase">In Stores Now</h2>
                    <figure className="image is-256x256" style={{height: "auto"}}>
                        <img style={{width: 250, height: "auto"}} src={newBook.imageLink} />
                    </figure>
                    <div className="pt-3">
                        <a class="button is-large is-light is-rounded is-uppercase">Find it here</a>
                    </div>
                    {/* <div className="notification has-text-grey-darker">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.{" "}
                        <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec
                        nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
                        diam, et dictum <a>felis venenatis</a> efficitur. Sit amet, consectetur
                        adipiscing elit
                    </div> */}
                </div>
            </AttentionBanner>
            <section className="section">
                <div className="container">
                    {workData
                        .filter(work => !work.isNew)
                        .map((work, i) => (
                            <BookMedia
                                key={i}
                                title={work.title}
                                image={work.imageLink}
                                description={""}
                                link={work.link}
                            />
                        ))}
                </div>
            </section>
        </MainLayout>
    );
}
