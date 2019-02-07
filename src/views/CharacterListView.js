import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getChar } from "../actions";

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
      <h2>Retrieving data...</h2>
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <h1>Character List!!</h1>
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error
  }
};

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {getChar}
)(CharacterListView);


