import Link from "next/link";

export default class BookMedia extends React.Component {
    render() {
        const {title, image, description} = this.props;
        return (
            <article className="media has-background-light shadow rounded p-3 flex-column align-items-center align-items-md-start">
                <h1 className="title is-size-4-mobile">{title}</h1>
                <div className="d-flex flex-column flex-md-row">
                    <figure className="m-xs-0 mr-3 media-left d-flex justify-content-center justify-content-md-center">
                        <div className="image is-128x128" style={{height: "auto"}}>
                            <img src={image} />
                        </div>
                    </figure>
                    <div className="media-content d-flex flex-column justify-content-between align-items-center align-items-md-start">
                        <div className="content mt-3 mt-md-0">
                            <p>
                                {/* <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                            <br /> */}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                                ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
                                non massa sem. Etiam finibus odio quis feugiat facilisis.
                            </p>
                        </div>
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
                                </div>
                            </nav>
                        </div>
                    </div>
                    {/* <div className="media-right">
                        <button className="delete" />
                    </div> */}
                </div>
            </article>
        );
    }
}
