import React from "react";

import Navigation from "../components/Navigation";
import Character from "../components/Character";

export default class NpcsPage extends React.Component {
  constructor(props) {
    super(props);

    this.npcs = props.data.allContentfulCharacter.nodes.filter((character) => {
      return character.type === "NPC";
    });
  }

  getNames() {
    return this.npcs.map((npc) => npc.name);
  }

  render() {
    return (
      <>
        <Navigation type="NPC" names={this.getNames()} />
        {this.npcs.map((npc) => {
          return <Character key={npc.name} character={npc} />;
        })}
      </>
    );
  }
}
