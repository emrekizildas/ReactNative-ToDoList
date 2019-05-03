import React, {Component} from 'react';
import { Text } from 'react-native';
import Main from './Components/Main';
import Add from './Components/Add';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux';

export default class App extends Component {
  render() {
    return (
      <Router sceneStyle={styles.container}>
        <Stack key="root">
          <Scene renderRightButton={this.rightButton} key="main" component={Main} title="Ana Sayfa"/>
          <Scene key="add" component={Add} title="Yeni Ekle"  />
        </Stack>
      </Router>
    );
  }

  rightButton = () => {
    return (
      <Text
        style={styles.rightButtonStyle}
        onPress={() => Actions.add()}
      >
      +
      </Text>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightButtonStyle: {
    marginRight: 10,
    fontSize: 24
  }
};
