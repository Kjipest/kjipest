import { Column, Container, DropdownContainer, Row, Text, Tooltip } from "ignite-components";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
// import DropdownLink from "./DropdownLink";
import { ParentLink } from "./interfaces";
import { LogoContainer, MarginIcon, NavigationRow, NoWrapRow, StyledLogo, StyledNav } from "./style";

export interface Props {
    toggleMenu?: Function;
    title: string;
    setGlobalFilters?: Function;
}

export interface State {
    links: ParentLink[];
    hoverIndex?: number;
}

class NavBar extends Component<Props, State> {
    timer: any;

    constructor(props: Props) {
        super(props);
        this.state = {
            links: [
                {
                    href: "/dashboard/structure/",
                    name: "Data",
                    children: [],
                },
                {
                    href: "/dashboard/analyze/",
                    name: "Analyze",
                    children: [],
                },
                {
                    href: "/dashboard/analyze/",
                    name: "Prioritize",
                    children: [],
                },
                {
                    href: "/dashboard/implement/",
                    name: "Implement",
                    children: [],
                },
                {
                    href: "/dashboard/follow-up/",
                    name: "Follow-up",
                    children: [],
                },
            ],
        };
    }

    handleEnter(index: number) {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        this.setState({ hoverIndex: index });
    }

    handleLeave() {
        this.timer = setTimeout(() => {
            this.setState({ hoverIndex: -1 });
        }, 200);
    }

    render() {
        const { links, hoverIndex } = this.state;
        return (
            <StyledNav bg="dark">
                <Column>
                    <Container>
                        <NavigationRow padding={[0, 2]} alignVertical="center">
                            <Column sm={2.75}>
                                <Row align="center">
                                    <Tooltip title="Hjem">
                                        <LogoContainer md={0.5} sm={1}>
                                            <NavLink to="/dashboard/">
                                                <StyledLogo src={logo} />
                                            </NavLink>
                                        </LogoContainer>
                                    </Tooltip>
                                </Row>
                            </Column>
                            <Column md={6.25} sm={5.25}>
                                <Row alignVertical="center">
                                    {links.map((link, i) => (
                                        <Column
                                            id={`link-${i}`}
                                            onMouseEnter={() => {
                                                this.handleEnter(i);
                                            }}
                                            onMouseLeave={() => {
                                                this.handleLeave();
                                            }}
                                            bg="dark"
                                            hover
                                            key={`link-${i}`}
                                            padding={[1, 0]}
                                        >
                                            <DropdownContainer>
                                                <NoWrapRow alignVertical="center" align="center" padding={0.3}>
                                                    <Text weight={600} margin={[0]} style={{ fontSize: "1.1em" }}>
                                                        {link.name}
                                                    </Text>
                                                    <MarginIcon icon="caret-down" />
                                                </NoWrapRow>
                                                {/* <DropdownLink
                                                    width="275px"
                                                    top="3.75em"
                                                    links={link.children}
                                                    index={i}
                                                    hoverIndex={hoverIndex}
                                                /> */}
                                            </DropdownContainer>
                                        </Column>
                                    ))}
                                </Row>
                            </Column>
                        </NavigationRow>
                    </Container>
                </Column>
            </StyledNav>
        );
    }
}

export default NavBar;
