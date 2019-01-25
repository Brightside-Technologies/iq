import MainLayout from "../containers/MainLayout";
import BookMedia from "../components/BookMedia";
import PageTitleHeading from "../components/PageTitleHeading";
import AttentionBanner from "../components/AttentionBanner";
import styled from "styled-components";

import workData from "../data/works.json";

const Figure = styled.figure`
    max-width: 175px;
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

const Article = styled.article`
    padding: 16px;
`;

export default function WorkPage() {
    return (
        <MainLayout>
            <section className="section">
                <PageTitleHeading title="Work" />
                <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <Article className="tile is-child box has-background-light">
                            <p className="title has-text-primary has-text-centered">
                                {workData[3].title}
                            </p>
                            <div className="is-flex is-centered pb-3">
                                <Figure>
                                    <Img src={workData[3].imageLink} />
                                </Figure>
                            </div>
                            <p>{workData[3].description}</p>
                        </Article>
                    </div>
                    <div className="tile is-vertical is-8">
                        <div className="tile">
                            <div className="tile is-parent is-vertical">
                                <Article className="tile is-child box has-background-light">
                                    <p className="title has-text-primary has-text-centered-mobile">
                                        {workData[0].title}
                                    </p>
                                    <div className="columns">
                                        <p className="column is-8">{workData[0].description}</p>
                                        <div className="column is-flex is-centered">
                                            <Figure>
                                                <Img src={workData[0].imageLink} />
                                            </Figure>
                                        </div>
                                    </div>
                                </Article>
                                <Article className="tile is-child box has-background-light">
                                    <p className="title has-text-primary has-text-centered-mobile">
                                        {workData[1].title}
                                    </p>
                                    <div className="columns">
                                        <div className="column is-4 is-flex is-centered">
                                            <Figure>
                                                <Img src={workData[1].imageLink} />
                                            </Figure>
                                        </div>
                                        <div className="column">
                                            <p>{workData[1].description}</p>
                                        </div>
                                    </div>
                                </Article>
                            </div>
                            <div className="tile is-parent">
                                <Article className="tile is-child box has-background-light">
                                    <p className="title has-text-primary has-text-centered-mobile">
                                        {workData[2].title}
                                    </p>
                                    <p>{workData[2].description}</p>
                                    <div className="column is-flex is-centered">
                                        <Figure>
                                            <Img src={workData[2].imageLink} />
                                        </Figure>
                                    </div>
                                </Article>
                            </div>
                        </div>
                        <div className="tile is-parent">
                            <Article className="tile is-child box has-background-light">
                                <div className="columns">
                                    <div className="column is-narrow is-flex-mobile is-centered">
                                        <Figure>
                                            <Img src={workData[4].imageLink} />
                                        </Figure>
                                    </div>
                                    <div className="column">
                                        <p className="title has-text-primary has-text-centered-mobile">
                                            {workData[4].title}
                                        </p>
                                        <p>{workData[4].description}</p>
                                    </div>
                                </div>
                            </Article>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
