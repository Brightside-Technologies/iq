import Avatar from "../images/iq.jpg";
import "../styles/site.scss";
import Nav from "./Nav";
//style={{backgroundImage: `url(${HeroImg})`}}

export default function HomeHero() {
    return (
        <section className="hero is-bold is-fullheight">
            <div className="hero-head">
                <Nav />
            </div>
            <div className="hero-body">
                <div className="container has-text-centered d-flex flex-column align-items-center">
                    <figure className="avatar-figure image is-384x384 animated fadeInDown">
                        <img className="is-rounded border border-white avatar" src={Avatar} />
                    </figure>
                    <h1 className="title is-1 has-text-grey-darker pt-2 animated fadeInUp">
                        Isabel Quintero
                    </h1>
                    <h2 className="subtitle is-2 has-text-grey pt-2 animated fadeInUp">
                        Lorem Ipsum
                    </h2>
                </div>
            </div>
        </section>
    );
}
