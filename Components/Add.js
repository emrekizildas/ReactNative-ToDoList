import React, { Component } from 'react';
import { TextInput, View, Dimensions, AsyncStorage } from 'react-native';
import Button from './Button';
import {Actions} from 'react-native-router-flux';
import { addTodoList, getTodoList, updateTodoList } from '../Actions';
import { connect } from 'react-redux';


const { width, height } = Dimensions.get('window');

let data = [];

class Add extends Component {
    state = {
        title: '',
        desc: '',
        data: []
    }

    pushItem = () => {
        const params = { 
            title: this.state.title,
            desc: this.state.desc,
        };
        if(this.props.isupdate){
            data[this.props.index].title = params.title;
            data[this.props.index].desc = params.desc;
            this.props.updateTodoList(data);      
        }else{
            this.props.addTodoList(params);
        }
    }

    componentWillMount(){
        this.props.getTodoList();
    }

    componentDidMount(){
          data = this.props.data;
          if(this.props.isupdate) {
              const { title, desc } = data[this.props.index];
              this.setState({
                  title,
                  desc, 
              });
          }
    }

    async componentWillReceiveProps(props) {
        if(props.isCreate) {
            const str = JSON.stringify(props.data);
            await AsyncStorage.setItem('data', str);
            props.isCreate = false;
            Actions.pop();
        }

        if(props.isUpdate){
            console.log('update çalıştı.');
            await AsyncStorage.setItem('data',JSON.stringify(data));
            props.isUpdate = false;
            Actions.pop();
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
                    onChangeText={(text)=>this.setState({desc: text})}
                    value={this.state.desc}
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

const mapStateToProps = ({ todoListResponse }) => {
    return { data: todoListResponse.data, isCreate: todoListResponse.isCreate, isUpdate: todoListResponse.isUpdate}
};

export default connect(mapStateToProps, { addTodoList, getTodoList, updateTodoList })(Add);
