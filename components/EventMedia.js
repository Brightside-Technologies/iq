import Link from "next/link";
import {format} from "date-fns";

export default class EventMedia extends React.Component {
    render() {
        const {title, image, description, location, address, start, end, url} = this.props;
        return (
            <article className="media">
                <figure className="media-left">
                    <p className="image is-128x128">
                        <img src={image} />
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <strong>{title}</strong>
                        <div className="d-flex flex-column">
                            <small className="has-text-grey-dark">{location}</small>
                            <small className="has-text-grey-dark">{address}</small>
                            <small className="has-text-grey-dark">{`${format(
                                start,
                                "MMM D"
                            )} ${format(start, "hh:mma")}-${format(end, "hh:mma")}`}</small>
                        </div>
                    </div>
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
                </div>
            </article>
        );
    }
}
