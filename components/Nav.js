import Link from "next/link";

export default class Nav extends React.Component {
    state = {
        isNavbarOpen: false
    };

    handleToggleNavbar = () => {
        const {isNavbarOpen} = this.state;
        this.setState({isNavbarOpen: !isNavbarOpen});
    };

    render() {
        const {isNavbarOpen} = this.state;
        return (
            <nav
                className="navbar has-background-white"
                role="navigation"
                aria-label="main navigation">
                <div className="navbar-brand">
                    <Link href="/">
                        <a className="navbar-item has-text-weight-bold has-background-link has-text-white">
                            IQ
                        </a>
                    </Link>
                    <Link href="">
                        <a className="navbar-item">
                            <i className="fab fa-facebook-f" />
                        </a>
                    </Link>
                    <Link href="">
                        <a className="navbar-item">
                            <i className="fab fa-twitter" />
                        </a>
                    </Link>
                    <Link href="">
                        <a className="navbar-item">
                            <i className="fab fa-instagram" />
                        </a>
                    </Link>
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
                        <Link href="/">
                            <a className="navbar-item">Home</a>
                        </Link>
                        <Link href="/work">
                            <a className="navbar-item">Work</a>
                        </Link>
                        <Link href="/events">
                            <a className="navbar-item">Events</a>
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }
}
