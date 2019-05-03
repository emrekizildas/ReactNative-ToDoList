import React, { Component } from 'react';
import { TextInput, View, Dimensions, AsyncStorage } from 'react-native';
import Button from './Button';
import {Actions} from 'react-native-router-flux';

const { width, height } = Dimensions.get('window');
export default class Add extends Component {
    state = {
        title: '',
        description: '',
        i:-1,
        data:[],
    }

    pushItem(){
        if(this.props.index != undefined){
            this.state.data[this.props.index].title = this.state.title;
            this.state.data[this.props.index].desc = this.state.description;
            AsyncStorage.setItem('data',JSON.stringify(this.state.data));
            Actions.reset('main', {newData: {'title': this.state.title, 'desc': this.state.description}});            
        }else{
           this.state.data.push({'title':this.state.title,'desc':this.state.description});
            this.setState(this.state.data)
             this.setState({title: ''})
            this.setState({description: ''})
            AsyncStorage.setItem('data',JSON.stringify(this.state.data));
             Actions.reset('main', {newData: {'title': this.state.title, 'desc': this.state.description}});
        }
    }

    componentWillMount(){
        AsyncStorage.getItem('data')
        .then(value => this.setState({ data: JSON.parse(value) }));
        if(this.props.index != undefined){
            this.setState({ title: this.props.title });
            this.setState({ description: this.props.desc })
        }
    }

  render() {
    return (
      <View>
           <View style={styles.input}>
                <TextInput 
                    placeholder="Başlık giriniz"
                    placeholderTextColor="gray"
                    style={{borderColor:"black", borderWidth:0.4, marginBottom:10, height:35}}
                    onChangeText={(text)=>this.setState({title: text})}
                    value={this.state.title}
                />
                
                <TextInput 
                    placeholder="Açıklama giriniz"
                    placeholderTextColor="gray"
                    multiline={true}
                    numberOfLines={40}
                    style={{borderColor:"black", borderWidth:0.3, height: 100}}
                    onChangeText={(text)=>this.setState({description: text})}
                    value={this.state.description}
                />
            </View>
            <Button onClick={this.pushItem.bind(this)} />
      </View>
    )
  }
}

const styles = {
    input:{
        width: width*0.9,
    }
}
