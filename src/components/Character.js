import React from "react";
import styled from "styled-components";

const CharacterContainer = styled.div`
  position: relative;
  padding-top: 48px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 96px;
  line-height: 96px;
  font-weight: 300;
`;

const Content = styled.div``;

const Details = styled.div`
  display: flex;
  font-size: 24px;
  margin-bottom: 16px;
  letter-spacing: 1.2px;
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  overflow-x: scroll;
`;

const ImageWrapper = styled.div`
  flex-shrink: 0;
  height: 350px;
  margin-right: 12px;

  &:last-of-type {
    margin-right: 0;
  }
`;

const Image = styled.img`
  height: 100%;
`;

const Backstory = styled.div`
  font-size: 15px;
  line-height: 22px;
`;

export default class Character extends React.Component {
  renderImages(images) {
    return (
      <ImageContainer>
        {images.map((image, i) => {
          return (
            <ImageWrapper key={i}>
              <Image src={image.file.url} alt={image.description} />
            </ImageWrapper>
          );
        })}
      </ImageContainer>
    );
  }

  render() {
    const { character, showBackstory = true } = this.props;
    const { name, race, images, backstory } = character;

    return (
      <CharacterContainer id={name} key={name}>
        <Title>{name}</Title>
        <Details>
          <h3>
            {race} {character.class}
          </h3>
        </Details>
        <Content>
          {images && images.length && this.renderImages(images)}
          {backstory && showBackstory && (
            <Backstory
              dangerouslySetInnerHTML={{
                __html: character.backstory.childMarkdownRemark.html,
              }}
            />
          )}
        </Content>
      </CharacterContainer>
    );
  }
}
