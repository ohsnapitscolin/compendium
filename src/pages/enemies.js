import React from "react";

import Navigation from "../components/Navigation";
import Character from "../components/Character";

export default class EnemiesPage extends React.Component {
  constructor(props) {
    super(props);

    this.enemies = props.data.allContentfulCharacter.nodes.filter(
      (character) => {
        return character.type === "Enemy";
      }
    );
  }

  getNames() {
    return this.enemies.map((enemy) => enemy.name);
  }

  render() {
    return (
      <>
        <Navigation type="Enemy" names={this.getNames()} />
        {this.enemies.map((enemy) => {
          return <Character key={enemy.name} character={enemy} />;
        })}
      </>
    );
  }
}
