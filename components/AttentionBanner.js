export default function AttentionBanner(props) {
    const {children} = props;
    return (
        <section className="section hero is-bold is-primary">
            <div className="hero-body">
                <div className="container">{children}</div>
            </div>
        </section>
    );
}
