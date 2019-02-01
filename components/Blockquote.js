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
    const {image, person, company} = citation;
    return (
        <StyledBlockquote>
            <div className={`message ${context || ""}`}>
                <div className="message-body has-background-grey-lighter">
                    {children}
                    <QuoteFooter>
                        <CitationImage className="image is-64x64">
                            <img className="is-rounded" src={image} />
                        </CitationImage>
                        <div>
                            {person && <span>{person} &ndash;</span>}
                            <cite title={company || person}>{company || person}</cite>
                        </div>
                    </QuoteFooter>
                </div>
            </div>
        </StyledBlockquote>
    );
}
