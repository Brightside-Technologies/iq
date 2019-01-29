import styled from "styled-components";
import _awards from "../data/_awards";

const ListItem = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px 0;
`;

export default function AwardsList() {
    return (
        <div>
            {_awards.map((award, i) => (
                <ListItem key={i}>
                    <p className="title is-5">{award.name}</p>
                    <p className="subtitle is-6">{award.date}</p>
                </ListItem>
            ))}
        </div>
    );
}
