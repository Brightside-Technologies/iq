import Link from "next/link";
import {format} from "date-fns";
import styled from "styled-components";

const Figure = styled.figure`
    width: 100px;
    height: 100px;
    overflow: hidden;
    -moz-border-radius: 8px;
    border-radius: 8px;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Level = styled.nav`
    width: 100%;
`;
export default class EventMedia extends React.Component {
    render() {
        const {title, image, description, location, address, start, end, url} = this.props;
        return (
            <article className="media has-background-light p-2 rounded">
                <div className="media-left d-flex flex-column align-items-center">
                    <Level className="level is-mobile is-marginless has-background-light">
                        <div className="level-item has-text-centered">
                            <div>
                                <p className="heading is-size-7 is-marginless">
                                    {format(start, "MMM")}
                                </p>
                                <p className="title has-text-link">{format(start, "DD")}</p>
                            </div>
                        </div>
                    </Level>
                    <Figure>
                        <Img src={image} />
                    </Figure>
                    <Level className="pt-2 level is-mobile">
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
                    </Level>
                </div>
                <div className="media-content">
                    <div className="content">
                        <div className="mb-2">
                            <strong className="is-size-5 is-size-6-mobile">{title}</strong>
                        </div>
                        <div className="d-flex flex-column">
                            <small className="has-text-grey-darker is-size-6-desktop">
                                {location}
                            </small>
                            <small className="has-text-grey-dark">{address}</small>
                            <small className="has-text-grey-dark">{`${format(
                                start,
                                "hh:mma"
                            )}-${format(end, "hh:mma")}`}</small>
                        </div>
                    </div>
                    {/* <nav className="level is-mobile">
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
                    </nav> */}
                </div>
            </article>
        );
    }
}
