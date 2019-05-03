import React, {Component} from 'react';
import {TextInput,View,Text,Dimensions} from 'react-native';

const {width, height}=Dimensions.get('window');
class Input extends Component{
    state={
        title:'',
        description:''
    }
    render(){
        return(
            <View durum={this.state} style={styles.input}>
                <TextInput 
                    placeholder="Başlık giriniz"
                    placeholderTextColor="gray"
                    style={{borderColor:"black", borderWidth:1, marginBottom:5}}
                    onChangeText={(text)=>this.setState({title: text})}
                    
                    
                />
                
                <TextInput 
                    placeholder="Açıklama giriniz"
                    placeholderTextColor="gray"
                    multiline={true}
                    numberOfLines={4}
                    style={{borderColor:"black", borderWidth:1}}
                    onChangeText={(text)=>this.setState({description: text})}
                />
            </View>
        );
    }
}

const styles={
    input:{
        width: width*0.9,
    }
};

export default Input;