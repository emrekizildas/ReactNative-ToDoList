import React, {Component} from 'react';
import { Dimensions,View,FlatList,AsyncStorage} from 'react-native';
import ListItems from './ListItems';


const { width, height } = Dimensions.get('window');
class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            description:'',
            i:-1,
            data:[]
        }
    }

    componentWillMount() {
       AsyncStorage.getItem('data')
       .then(value => this.setState({ data: JSON.parse(value) }));
    }

    render(){
        return(
            <View style={styles.main}>
            <FlatList
                data={this.state.data.map((item)=>item)}
                keyExtractor={(object, index) => 'a'+index}
                renderItem={({ item,i }) => {
                    return (
                        <ListItems 
                            key={i}
                            list={item} 
                            array={this.state} 
                            index={this.state.data.indexOf(item)}
                            />
                    );
                  }}
            />
            </View>
        );
    }
}

export default Main;

const styles = {
    main:{
        flex: 9,
        width: width,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop: 15,
        flexDirection: 'column',
    }
};