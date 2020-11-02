import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

import { responsive } from "../utils/style";

const DesktopContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: none;

  ${responsive.sm`
    display: block;
  `}
`;

const MobileContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 48px;
  background-color: #171115;

  &.open {
    height: 100%;
  }

  z-index: 10;

  ${responsive.sm`
    display: none;
  `}
`;

const NavButton = styled.button`
  position: absolute;
  top: 4px;
  right: 24px;

  font-family: "Staatliches", cursive;
  font-weight: 300;
  font-size: 40px;
  line-height: 40px;
`;

const NavigationContent = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  padding: 24px;

  width: 250px;
  max-height: 100%;

  overflow-y: scroll;

  ${responsive.sm`
    padding: 48px;
  `}

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const Category = styled.h1`
  font-family: "Staatliches", cursive;
  font-weight: 300;
  font-size: 32px;
  letter-spacing: 2px;
`;

const CategoryLink = styled(Link)`
  font-family: "Staatliches", cursive;
  font-weight: 300;
  font-size: 32px;
  letter-spacing: 2px;

  &.active {
    text-decoration: underline;
  }
`;

const SubCategoryLink = styled(Link)`
  font-family: "Staatliches", cursive;
  font-weight: 300px;
  font-size: 24px;
  letter-spacing: 1.5px;

  &.active {
    text-decoration: underline;
  }
`;

const Names = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  margin-top: 4px;

  button {
    font-size: 16px;
    margin-bottom: 4px;
  }
`;

export default class Navigation extends React.Component {
  constructor() {
    super();

    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    if (!this.props.type) {
      this.setState({
        open: true,
      });
    }
  }

  toggleOpen() {
    this.setState({
      open: !this.state.open,
    });
  }

  onNameClick(name) {
    this.setState({
      open: false,
    });

    const element = document.getElementById(name);
    element.scrollIntoView();
  }

  renderNames() {
    const { names } = this.props;
    return (
      <Names>
        {names.map((name, i) => {
          return (
            <button key={i} onClick={this.onNameClick.bind(this, name)}>
              {name}
            </button>
          );
        })}
      </Names>
    );
  }

  renderLinks() {
    const { type } = this.props;

    return (
      <NavigationContent>
        <Category>Characters</Category>
        <SubCategoryLink
          className={type === "PC" ? "active" : ""}
          to="/players"
        >
          Players
        </SubCategoryLink>
        {type === "PC" && this.renderNames()}
        <SubCategoryLink className={type === "NPC" ? "active" : ""} to="/npcs">
          NPCs
        </SubCategoryLink>
        {type === "NPC" && this.renderNames()}
        <SubCategoryLink
          className={type === "Enemy" ? "active" : ""}
          to="/enemies"
        >
          Enemies
        </SubCategoryLink>
        {type === "Enemy" && this.renderNames()}
        <CategoryLink
          className={type === "Places" ? "active" : ""}
          to="/places"
        >
          Places
        </CategoryLink>
        {type === "Places" && this.renderNames()}
      </NavigationContent>
    );
  }

  render() {
    const { open } = this.state;

    return (
      <>
        <DesktopContainer>{this.renderLinks()}</DesktopContainer>
        <MobileContainer className={open ? "open" : ""}>
          {!open && (
            <NavButton onClick={this.toggleOpen.bind(this)}>=</NavButton>
          )}
          {open && (
            <>
              <NavButton onClick={this.toggleOpen.bind(this)}>X</NavButton>
              {this.renderLinks()}
            </>
          )}
        </MobileContainer>
      </>
    );
  }
}
