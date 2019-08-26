import { colors } from "config";
import { Column, Container, Icon, Row } from "ignite-components";
import { lighten } from "polished";
import styled from "styled-components";

export const navHeight = 60;

export const NavigationRow = styled(Row)`
    padding: 0.4em 1.7em;
    @media (max-width: 920px) {
        & {
            padding: 2px;
        }
    }
`;

export const StyledNav = styled(Container.withComponent("nav"))`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1338;
    left: 0;
    width: auto;

    ${NavigationRow} {
        border-bottom: 1px solid ${lighten(0.05, colors.dark.value)};
    }
`;

export const MarginIcon = styled(Icon)`
    margin-left: 1em;
    @media (max-width: 905px) {
        & {
            display: none;
        }
    }
`;

export const LogoContainer = styled(Column)`
    height: 45px;
`;

export const LinksContainer = styled(Column)`
    @media (max-width: 905px) {
        & {
            width: fit-content;
        }
    }
`;

export const StyledLogo = styled.img`
    height: 100%;
`;

export const NoWrapRow = styled(Row)`
    white-space: nowrap;
    word-break: keep-all;
`;
