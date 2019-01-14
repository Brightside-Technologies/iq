import MainLayout from "../containers/MainLayout";
import BookMedia from "../components/BookMedia";

import workData from "../data/works.json";

export default function WorkPage() {
    return (
        <MainLayout>
            <section className="section">
                <div className="container">
                    <h1 className="title">Work</h1>
                    {workData.map((work, i) => (
                        <BookMedia
                            key={i}
                            title={work.title}
                            image={work.imageLink}
                            description={""}
                            link={work.link}
                        />
                    ))}
                </div>
            </section>
        </MainLayout>
    );
}
