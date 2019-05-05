import React, {Component} from 'react';
import { Text } from 'react-native';
import Main from './Components/Main';
import Add from './Components/Add';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './Reducers';

export default class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger));
    return (
      <Provider store={store}>
      <Router sceneStyle={styles.container}>
        <Stack key="root">
          <Scene renderRightButton={this.rightButton} key="main" component={Main} title="Ana Sayfa"/>
          <Scene key="add" component={Add} title="Yeni Ekle"  />
        </Stack>
      </Router>
      </Provider>
    );
  }

  rightButton = () => {
    return (
      <Text
        style={styles.rightButtonStyle}
        onPress={() => Actions.add({isUpdate: false, isCreate: true })}
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
