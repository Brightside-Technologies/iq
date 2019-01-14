export default class BookMedia extends React.Component {
    render() {
        const {title, image, description} = this.props;
        return (
            <article className="media">
                {/* <figure className="media-left">
                    <p className="image is-126x126">
                        <img src={image} />
                    </p>
                </figure> */}
                <figure className="media-left">
                    <div className="image is-128x128" style={{height: "auto"}}>
                        <img src={image} />
                    </div>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <h1 className="title">{title}</h1>
                        <p>
                            {/* <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                            <br /> */}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare
                            magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa
                            sem. Etiam finibus odio quis feugiat facilisis.
                        </p>
                    </div>
                    <div>
                        <p class="heading">Share</p>
                        <nav className="level is-mobile">
                            <div className="level-left">
                                <a className="level-item">
                                    <span className="icon is-small">
                                        <i className="fas fa-reply" />
                                    </span>
                                </a>
                                <a className="level-item">
                                    <span className="icon is-small">
                                        <i className="fas fa-retweet" />
                                    </span>
                                </a>
                                <a className="level-item">
                                    <span className="icon is-small">
                                        <i className="fas fa-heart" />
                                    </span>
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="media-right">
                    <button className="delete" />
                </div>
            </article>
        );
    }
}
