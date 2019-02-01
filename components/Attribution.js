import styled from "styled-components";

const Heart = styled.span`
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' focusable='false' width='1em' height='1em' style='-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);' preserveAspectRatio='xMidYMid meet' viewBox='0 0 72 72'%3E%3Cpath fill='%23FF473E' d='M60.1 23.3c-5.9-7-16.5-7.4-22.8-1-.9.9-2.3.9-3.1 0-6-6.1-15.9-6.1-21.9 0-5.2 5.1-6 13.4-2 19.5 1.2 1.9 2.8 3.4 4.5 4.5l19.9 16.1c.7.6 1.7.6 2.4 0l19.8-16.1c1.7-1.1 3.2-2.5 4.4-4.4 3.6-5.7 3.2-13.4-1.2-18.6z'/%3E%3C/svg%3E");
`;

export default function AttentionBanner(props) {
    const {isDark, isLight} = props;

    return (
        <div>
            <small>
                Crafted with <Heart/>
            </small>
            <small>by Brightside Tech</small>
        </div>
    );
}
