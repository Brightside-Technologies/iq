import MainLayout from "../containers/MainLayout";
import BookMedia from "../components/BookMedia";
import PageTitleHeading from "../components/PageTitleHeading";
import AttentionBanner from "../components/AttentionBanner";
import styled from "styled-components";

import workData from "../data/works.json";

const Figure = styled.figure`
    max-width: 150px;
    height: auto;
    overflow: hidden;
    -moz-border-radius: 8px;
    border-radius: 8px;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export default function WorkPage() {
    return (
        <MainLayout>
            <section className="section">
                <PageTitleHeading title="Work" />
                <div className="tile is-ancestor">
                    <div className="tile is-vertical is-8">
                        <div className="tile">
                            <div className="tile is-parent is-vertical">
                                <article className="tile is-child notification is-primary">
                                    <p className="title">{workData[0].title}</p>
                                    <div className="columns">
                                        <p className="column">{workData[0].description}</p>
                                        <Figure className="column">
                                            <Img src={workData[0].imageLink} />
                                        </Figure>
                                    </div>
                                </article>
                                <article className="tile is-child notification is-warning">
                                    <div className="columns">
                                        <Figure className="column">
                                            <Img src={workData[1].imageLink} />
                                        </Figure>
                                        <div className="column">
                                            <p className="title">{workData[1].title}</p>
                                            <p>{workData[1].description}</p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child notification is-info">
                                    <p className="title">{workData[2].title}</p>
                                    <p>{workData[2].description}</p>
                                    <Figure className="column">
                                        <Img src={workData[2].imageLink} />
                                    </Figure>
                                </article>
                            </div>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child notification is-danger">
                                <p className="title">Wide tile</p>
                                <p className="subtitle">Aligned with the right tile</p>
                                <div className="content">{/* <!-- Content --> */}</div>
                            </article>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child notification is-success">
                            <div className="content">
                                <p className="title">Tall tile</p>
                                <p className="subtitle">With even more content</p>
                                <div className="content">{/* <!-- Content --> */}</div>
                            </div>
                        </article>
                    </div>
                </div>
                {/* <div className="container content is-medium">
                    <p>
                        The Owl always takes her sleep during the day. Then after sundown, when the
                        rosy light fades from the sky and the shadows rise slowly through the wood,
                        out she comes ruffling and blinking from the old hollow tree. Now her weird
                        "hoo-hoo-hoo-oo-oo" echoes through the quiet wood, and she begins her hunt
                        for the bugs and beetles, frogs and mice she likes so well to eat.
                    </p>
                </div> */}
            </section>
            {/* <AttentionBanner>
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
            </section> */}
        </MainLayout>
    );
}
