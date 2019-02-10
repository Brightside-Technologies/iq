import Link from "next/link";
import {withRouter} from "next/router";

class Nav extends React.Component {
    state = {
        isNavbarOpen: false
    };

    handleToggleNavbar = () => {
        const {isNavbarOpen} = this.state;
        this.setState({isNavbarOpen: !isNavbarOpen});
    };

    render() {
        const {email, facebook_url, twitter_url, instagram_url} = this.props;
        const {isNavbarOpen} = this.state;
        const {router} = this.props;
        return (
            <nav
                className="shadow-sm navbar has-background-white is-fixed-top"
                role="navigation"
                aria-label="main navigation">
                <div className="navbar-brand">
                    <Link href="/">
                        <a className="navbar-item has-text-weight-bold has-background-link has-text-white">
                            IQ
                        </a>
                    </Link>
                    <a rel="noopener" href={`${facebook_url}`} className="navbar-item">
                        <i
                            className={`fab fa-facebook-f ${
                                router.pathname === "/" ? "animated bounceIn" : ""
                            }`}
                        />
                    </a>
                    <a rel="noopener" href={`${twitter_url}`} className="navbar-item">
                        <i
                            className={`fab fa-twitter  ${
                                router.pathname === "/" ? "animated bounceIn delay-half-s" : ""
                            }`}
                        />
                    </a>
                    <a rel="noopener" href={`${instagram_url}`} className="navbar-item">
                        <i
                            className={`fab fa-instagram  ${
                                router.pathname === "/" ? "animated bounceIn delay-1s" : ""
                            }`}
                        />
                    </a>
                    <a href={`mailto:${email}`} className="navbar-item">
                        <i
                            className={`fas fa-envelope  ${
                                router.pathname === "/" ? "animated bounceIn delay-1-half-s" : ""
                            }`}
                        />
                    </a>
                    <a
                        onClick={this.handleToggleNavbar}
                        role="button"
                        className={`navbar-burger burger ${isNavbarOpen ? "is-active" : ""}`}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarItemsWrapper">
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                    </a>
                </div>

                <div
                    id="navbarItemsWrapper"
                    className={`navbar-menu ${isNavbarOpen ? "is-active" : ""}`}>
                    <div className="navbar-start" />
                    <div className="navbar-end">
                        <Link href="/bio">
                            <a
                                className={`navbar-item ${
                                    router.pathname === "/bio" ? "is-active" : ""
                                }`}>
                                Bio
                            </a>
                        </Link>
                        <Link href="/work">
                            <a
                                className={`navbar-item ${
                                    router.pathname === "/work" ? "is-active" : ""
                                }`}>
                                Work
                            </a>
                        </Link>
                        <Link href="/events">
                            <a
                                className={`navbar-item ${
                                    router.pathname === "/events" ? "is-active" : ""
                                }`}>
                                Events
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default withRouter(Nav);
