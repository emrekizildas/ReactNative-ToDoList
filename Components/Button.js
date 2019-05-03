import React, {Component} from 'react';
import { Text,Dimensions,TouchableOpacity} from 'react-native';

const { width, height } = Dimensions.get('window');
class Button extends Component{
    render(){
        return(
            <TouchableOpacity onPress={this.props.onClick}  style={styles.button}>
                <Text>Kaydet</Text>
            </TouchableOpacity>
        );
    }
}

const styles = {
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'green',
      height:40,
      marginTop: 15,
      borderRadius: 20,
      color: 'white'
    }
    
};

export default Button;