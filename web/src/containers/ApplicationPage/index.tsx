import { Container, Row } from "ignite-components";
import React from "react";
import { Route } from "react-router-dom";
import NavBar from "../../components/NavBar";
import LandingPage from "./LandingPage";
import { ContentContainer, DashboardContainer } from "./style";

class ApplicationPage extends React.Component {
    render() {
        return (
            <Row>
                <DashboardContainer align="center" bg="stableLight">
                    <NavBar title="Kjipest" />
                    <ContentContainer>
                        <Container padding={3}>
                            <Route exact path="/" component={LandingPage} />
                        </Container>
                    </ContentContainer>
                </DashboardContainer>
            </Row>
        );
    }
}

export default ApplicationPage;
