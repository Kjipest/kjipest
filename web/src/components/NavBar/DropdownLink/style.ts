import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
    padding: 10px 5px;
    width: 100%;
    font-size: 1.1em;
    vertical-align: middle;
    font-weight: 600;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.05);
    opacity: 0.8;

    span {
        margin-left: 8px;
    }

    &.active {
        opacity: 1;
    }

    &:hover {
        background: rgba(0, 0, 0, 0.1);
    }
`;
