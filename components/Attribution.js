import styled from "styled-components";

export default function AttentionBanner(props) {
    const {isDark, isLight} = props;

    return (
        <div>
            <small>
                Crafted with <span>heart</span>
            </small>
            <small>by Brightside Tech</small>
        </div>
    );
}
