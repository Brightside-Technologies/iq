import MainLayout from "../containers/MainLayout";
import AwardsList from "../components/AwardsList";
import PageTitleHeading from "../components/PageTitleHeading";
import AttentionBanner from "../components/AttentionBanner";
import styled from "styled-components";

const Blockquote = styled.blockquote`
    font-weight: bold;
    font-size: 1.25rem;
    footer {
        font-size: 80%;
        font-weight: normal;
        text-align: right;
    }

    cite {
        font-weight: normal;
        font-style: italic;
    }
`;

export default function BioPage() {
    return (
        <MainLayout>
            <AttentionBanner>
                <PageTitleHeading title="Bio" />
                <Blockquote>
                    <p className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec
                        nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
                        diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac
                        <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
                        sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a
                        neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                    </p>
                    <footer>
                        Someone famous in <cite title="Source Title">Source Title</cite>
                    </footer>
                </Blockquote>
            </AttentionBanner>
            <section className="section">
                <div className="container">
                    <div className="tile is-ancestor">
                        <div className="tile is-vertical is-8">
                            <div className="tile">
                                <div className="tile is-parent">
                                    <article className="tile is-child notification has-background-light">
                                        <p className="title">About Me</p>
                                        <div className="content">
                                            <p>
                                                A Wild Boar was sharpening his tusks busily against
                                                the stump of a tree, when a Fox happened by. Now the
                                                Fox was always looking for a chance to make fun of
                                                his neighbors. So he made a great show of looking
                                                anxiously about, as if in fear of some hidden enemy.
                                                But the Boar kept right on with his work.
                                            </p>
                                            <p>
                                                "Why are you doing that?" asked the Fox at last with
                                                a grin. "There isn't any danger that I can see."
                                            </p>
                                            <p>
                                                "True enough," replied the Boar, "but when danger
                                                does come there will not be time for such work as
                                                this. My weapons will have to be ready for use then,
                                                or I shall suffer for it."
                                            </p>
                                            <p>
                                                Preparedness for war is the best guarantee of peace.
                                            </p>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child notification has-background-light">
                                    <p className="title">Education</p>
                                    <div className="content">
                                        <p>Education details go here</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child notification has-background-light">
                                <div className="content">
                                    <p className="title mb-3">Awards</p>
                                    <p className="subtitle">&amp; Honors</p>
                                    <AwardsList />
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
