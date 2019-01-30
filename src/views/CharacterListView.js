import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import {getChar} from "../actions";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getChar();
    // call our action
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <h2>Characters are Loading Now! May the Force be with You!</h2>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => ({
  characters: state.charsReducer.characters
});

export default connect(
   mapStateToProps,
  { getChar }
    /* action creators go here */
  
)(CharacterListView);
