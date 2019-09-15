//import React from "react";
import MainLayout from "../containers/MainLayout";
import Head from "../components/Head";
import Section from "../components/Section";
import AttentionBanner from "../components/AttentionBanner";
import PageTitleHeading from "../components/PageTitleHeading";
import styled from "styled-components";

const QAContainer = styled.div`
    display: flex;

    padding: 1rem;

    span {
        padding-right: 1rem;
        line-height: 1;
    }
`;

export default function FAQPage({data, metadata}) {
    const {title, description, faq} = data;

    return (
        <MainLayout metadata={metadata}>
            <Head description={description} title={`${title} | La Isabel Quintero`} />
            <AttentionBanner>
                <PageTitleHeading title={title} />
            </AttentionBanner>
            <Section>
                {faq.map(item => {
                    return (
                        <div className="box is-paddingless">
                            <QAContainer className="has-background-light">
                                <span className="is-size-1 q">Q.</span>
                                <p>{item.question}</p>
                            </QAContainer>
                            <QAContainer>
                                <span className="is-size-1 is-size-5-mobile has-text-primary">
                                    A.
                                </span>
                                <p>{item.answer}</p>
                            </QAContainer>
                        </div>
                    );
                })}
            </Section>
        </MainLayout>
    );
}

FAQPage.getInitialProps = async () => {
    const dataAsync = import("../_data/_pages/_faq.json");
    const metadataAsync = import("../_data/_metadata.json");

    const data = await dataAsync;
    const metadata = await metadataAsync;

    return {
        data: data.default,
        metadata: metadata.default
    };
};
