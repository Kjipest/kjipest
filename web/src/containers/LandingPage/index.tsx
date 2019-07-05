import React, { Component } from "react";
import * as Papa from "papaparse";
import {
    Container,
    Card,
    CardContent,
    CardHeader,
    CardFooter,
    Row,
    Column,
    Text,
    Loader,
    Header,
    Icon,
    ProgressBar,
} from "ignite-components";
import * as fs from "fs";
import sad from "./sad.jpg";
import sad2 from "./sad2.jpg";

interface State {
    loading: boolean;
}

class LandingPage extends Component<State> {
    state: State = {
        loading: true,
    };

    componentDidMount() {
        this.setState({ loading: false });
    }

    parseLocations() {
        const file = fs.createReadStream("../../../csv/locations.csv"); // doesnt work
        Papa.parse(file, {
            complete: function(results) {
                console.log("Finished:", results.data);
            },
        });
    }

    render() {
        const { loading } = this.state;
        return (
            <Container animated bg="primary" padding={2}>
                <Row>
                    <Column padding={1}>
                        <Card bg="stable">
                            <CardHeader>
                                <Column>
                                    <Header size={3}>Velkommen til Kjipest.no</Header>
                                </Column>
                            </CardHeader>
                            <CardContent>
                                {loading && <Loader />}
                                <Text size={1}>
                                    Nettsiden som viser deg hvem som har det kjipest i landet akkurat nå
                                </Text>
                            </CardContent>
                            <CardFooter>
                                <Text size={3}>
                                    If you are having a bad day, remember someone else is having a worse day, but also
                                    remember you're someone
                                </Text>
                            </CardFooter>
                        </Card>
                    </Column>
                </Row>
                <Row>
                    <Column text="right" padding={0.5}>
                        <img src={sad} alt="" height={400} />
                    </Column>
                    <Column text="left" padding={0.5}>
                        <img src={sad2} alt="" height={400} />
                    </Column>
                </Row>
                <Card bg="stable" pading={1}>
                    <CardContent>
                        <Row>
                            <Header>Fremgang til ferdig side:</Header>
                        </Row>
                        <Row>
                            <Column padding={1}>
                                <ProgressBar height={1} round progress={7} color="accept" />
                                <Column text="center">
                                    <Loader color="secondary" />
                                </Column>
                            </Column>
                        </Row>
                        <Row>
                            <Header> Chattes i RT </Header>
                            <Column text="left" padding={0.2}>
                                <Icon icon="thumbs-up" size={3} />
                            </Column>
                        </Row>
                    </CardContent>
                </Card>
            </Container>
        );
    }
}
export default LandingPage;
