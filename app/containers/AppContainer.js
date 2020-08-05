import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PeopleList from "../components/PeopleList";
import { fetchPeople } from "../redux/actions/peopleActions";

class AppContainer extends Component {
  componentDidMount() {
    this.props.fetchPeople();
  }

  render() {
    let content = <PeopleList people={this.props.randomPeople.people} />;
    if (this.props.randomPeople.isFetching) {
      content = <ActivityIndicator size="large" />;
    }
    return <View style={styles.container}>{content}</View>;
  }
}

AppContainer.PropTypes = {
    fetchPeople: PropTypes.func.isRequired,
    randomPeople: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#093339"
  }
});

const mapStateToProps = state => {
    return {
        randomPeople: state
    };
}

export default connect(mapStateToProps, { fetchPeople })(AppContainer);