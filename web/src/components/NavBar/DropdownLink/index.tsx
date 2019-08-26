import { Container, Dropdown, Icon, Row } from "ignite-components";
import React from "react";
import { FeatureToggle } from "react-feature-toggles";
import { ChildLink } from "../interfaces";
import { StyledNavLink } from "./style";

interface Props {
    links: ChildLink[];
    index: number;
    hoverIndex?: number;
    width: string;
    top: string;
}

const DropdownLink = ({ links, index, hoverIndex, width, top }: Props) => {
    return (
        <Dropdown width={width} top={top} open={hoverIndex === index} bg="light">
            <Container id={`dropdown-${index}`}>
                {links.map(child => (
                    <Row key={`child-${child.href}`}>
                        <FeatureToggle featureName={child.feature}>
                            <StyledNavLink to={child.href}>
                                <Icon icon={child.icon} />
                                <span>{child.name}</span>
                            </StyledNavLink>
                        </FeatureToggle>
                    </Row>
                ))}
            </Container>
        </Dropdown>
    );
};

// export default DropdownLink;
