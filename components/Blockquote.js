import styled from "styled-components";

const StyledBlockquote = styled.blockquote`
    font-size: 1.25rem;
    footer {
        font-size: 80%;
        font-weight: normal;
        text-align: right;
    }

    cite {
        font-weight: normal;
        ${"" /* font-style: italic; */}
    }
`;

const QuoteFooter = styled.footer`
    display: flex;
    justify-content: end;
    align-items: center;
`;

const CitationImage = styled.figure`
    padding: 6px;
`;

export default function Blockquote(props) {
    const {children, citation, context} = props;
    const {image, image_url, person, company, link, title} = citation;
    return (
        <StyledBlockquote>
            <div className={`message ${context || ""}`}>
                <div className="message-body has-background-grey-lighter">
                    {children}
                    <QuoteFooter>
                        <CitationImage className="image is-64x64">
                            <img className="is-rounded" src={image || image_url} />
                        </CitationImage>
                        <div>
                            {person && !link && <span>{person}</span>}
                            {person && link && (
                                <a href={link} target="_blank">
                                    {person}
                                </a>
                            )}
                            {(company || title) && (
                                <span>
                                    &ndash;<cite title={company || title}>{company || title}</cite>
                                </span>
                            )}
                        </div>
                    </QuoteFooter>
                </div>
            </div>
        </StyledBlockquote>
    );
}
