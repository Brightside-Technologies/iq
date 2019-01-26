import MainLayout from "../containers/MainLayout";
import PageTitleHeading from "../components/PageTitleHeading";
import AttentionBanner from "../components/AttentionBanner";
import styled from "styled-components";

import workData from "../data/works.json";

const Figure = styled.figure`
    height: auto;
    overflow: hidden;
    border-radius: 8px;
    padding-bottom: 0;
    padding-right: 0;
    padding-left: 0;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-postiion: top;
`;

const FigCaption = styled.figcaption`
    position: relative;
    display: flex;
    justify-content: center;
`;

const Article = styled.article`
    padding: 16px;
`;

const Columns = styled.div`
    flex-wrap: wrap;
`;

export default function WorkPage() {
    return (
        <MainLayout>
            <AttentionBanner>
                <PageTitleHeading title="Work" />
                <p>
                    The wise old Owl knew quite well that it would do no good to argue with the
                    Grasshopper, nor with anybody else for that matter. Besides, her eyes were not
                    sharp enough by day to permit her to punish the Grasshopper as he deserved. So
                    she laid aside all hard words and spoke very kindly to him.
                </p>
            </AttentionBanner>
            <section className="section">
                <div className="container">
                    <Columns className="columns">
                        {workData.map((work, i) => (
                            <div key={i} className="column is-one-quarter">
                                <Figure className="image is-square box">
                                    <Image src={work.imageLink} />
                                    <FigCaption className="has-background-dark has-text-light">
                                        <small className="has-text-centered">{work.title}</small>
                                    </FigCaption>
                                </Figure>
                            </div>
                        ))}
                    </Columns>
                </div>
            </section>
        </MainLayout>
    );
}
