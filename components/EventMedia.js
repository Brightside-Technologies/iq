import SocialSharingButtons from "./SocialSharingButtons";
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
            <article className="media has-background-grey-lighter p-2 rounded">
                <div className="media-left d-flex flex-column align-items-center justify-content-between">
                    {start && (
                        <Level className="level is-mobile is-marginless">
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading is-size-7 is-marginless">
                                        {format(start, "MMM")}
                                    </p>
                                    <p className="title has-text-link">{format(start, "DD")}</p>
                                </div>
                            </div>
                        </Level>
                    )}
                    <Figure className="shadow-sm">
                        <Img src={image} />
                    </Figure>
                    {url && (
                        <a
                            className="mt-1 button is-link is-inverted is-small is-uppercase"
                            href={url}
                            rel="noopener"
                            target="_blank">
                            View Details
                        </a>
                    )}
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
                            {address && <small className="has-text-grey-dark">{address}</small>}
                            {start && (
                                <small className="has-text-grey-dark">{`${format(
                                    start,
                                    "hh:mma"
                                )}-${format(end, "hh:mma")}`}</small>
                            )}
                        </div>
                    </div>
                    {!!url && (
                        <div>
                            <p className="m-0 ml-2 heading has-text-link has-text-weight-semibold">
                                Show Some Love
                            </p>
                            <SocialSharingButtons label={`${title} @ ${location}`} link={url} />
                        </div>
                    )}
                </div>
            </article>
        );
    }
}
