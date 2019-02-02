export default function HomeHero(props) {
    const {greeting, tagline, image} = props;
    return (
        <section className="hero home-hero is-bold is-fullheight is-fullheight-with-navbar">
            <div className="hero-body">
                <div className="container has-text-centered d-flex flex-column align-items-center">
                    <figure className="avatar-figure image is-384x384 animated fadeInDown">
                        <img className="is-rounded border border-white avatar" src={image} />
                    </figure>
                    <h1 className="title is-1 has-text-grey-darker pt-2 animated fadeInUp">
                        {greeting}
                    </h1>
                    <h2 className="subtitle is-4 has-text-primary has-text-weight-bold pt-2 animated fadeInUp">
                        {tagline}
                    </h2>
                </div>
            </div>
        </section>
    );
}
