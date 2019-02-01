import Link from "next/link";
import MarkedContent from "../components/MarkedContent";
import Blockquote from "../components/Blockquote";
import styled from "styled-components";

const Figure = styled.figure`
    overflow: hidden;
    -moz-border-radius: 8px;
    border-radius: 8px;
`;

const FigCaption = styled.figcaption`
    position: relative;
    display: flex;
    align-items: center;
`;

const Img = styled.img`
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Row = styled.div`
    padding: 16px 0;
    &:not(:last-child) {
        border-bottom: 2px solid rgba(250, 124, 145, 0.5);
    }
`;

export default function BookMedia(props) {
    const {title, image, link, description, blurb, publisher} = props;
    return (
        <Row className="columns">
            <div className="column is-one-quarter">
                <Figure className="image is-4by5 shadow">
                    <Img src={image} />
                    <FigCaption className="has-background-light">
                        <figure className="image is-32x32">
                            <Img className="is-rounded p-1" src={publisher.logo} />
                        </figure>
                        <small className="has-text-centered">{publisher.name}</small>
                    </FigCaption>
                </Figure>
            </div>
            <Content className="column">
                <div>
                    <h2 className="title  is-4">{title}</h2>
                    <MarkedContent source={description} />
                    <Blockquote context="is-primary" citation={blurb.source}>
                        <MarkedContent source={blurb.content} />
                    </Blockquote>
                </div>
                <div className="pt-3">
                    <div>
                        <p className="heading has-text-grey-dark has-text-weight-semibold">
                            Show Some Love
                        </p>
                        <nav className="level is-mobile">
                            <div className="level-left">
                                <Link href="">
                                    <a className="level-item">
                                        <span className="icon is-size-5">
                                            <i className="fab fa-facebook-f" />
                                        </span>
                                    </a>
                                </Link>
                                <Link href="">
                                    <a className="level-item">
                                        <span className="icon is-size-5">
                                            <i className="fab fa-twitter" />
                                        </span>
                                    </a>
                                </Link>
                                <Link href="">
                                    <a className="level-item">
                                        <span className="icon is-size-5">
                                            <i className="fab fa-instagram" />
                                        </span>
                                    </a>
                                </Link>
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener"
                                    className="level-item">
                                    <span className="icon is-size-5">
                                        <i className="fas fa-heart" />
                                    </span>
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </Content>
        </Row>
    );
}

{
    /* <div>
<p className="heading has-text-grey-dark has-text-weight-semibold">
    Show Some Love
</p>
<nav className="level is-mobile">
    <div className="level-left">
        <Link href="">
            <a className="level-item">
                <span className="icon is-size-5">
                    <i className="fab fa-facebook-f" />
                </span>
            </a>
        </Link>
        <Link href="">
            <a className="level-item">
                <span className="icon is-size-5">
                    <i className="fab fa-twitter" />
                </span>
            </a>
        </Link>
        <Link href="">
            <a className="level-item">
                <span className="icon is-size-5">
                    <i className="fab fa-instagram" />
                </span>
            </a>
        </Link>
    </div>
</nav>
</div> */
}
