import { navHeight } from "components/NavBar/style";
import { Container, Row } from "ignite-components";
import styled from "styled-components";

export const DashboardContainer = styled(Row)`
    width: 100%;
    min-height: 100vh;
`;

export const ContentContainer = styled(Container)`
    width: 1400px;
    padding-top: ${navHeight}px;
`;
