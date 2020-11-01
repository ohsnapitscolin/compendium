import React from "react";

import Navigation from "../components/Navigation";
import Character from "../components/Character";

export default class PlayersPage extends React.Component {
  constructor(props) {
    super(props);

    this.players = props.data.allContentfulCharacter.nodes.filter(
      (character) => {
        return character.type === "PC";
      }
    );
  }

  getNames() {
    return this.players.map((player) => player.name);
  }

  render() {
    return (
      <>
        <Navigation type="PC" names={this.getNames()} />
        {this.players.map((player) => {
          return <Character key={player.name} character={player} />;
        })}
      </>
    );
  }
}
