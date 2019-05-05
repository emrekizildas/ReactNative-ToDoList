import React, {Component} from 'react';
import { Dimensions,View,FlatList,AsyncStorage} from 'react-native';
import ListItems from './ListItems';
import { connect } from 'react-redux';
import { getTodoList } from '../Actions';


const { width, height } = Dimensions.get('window');
class Main extends Component{

    componentDidMount() {
        this.props.getTodoList();
    }

    render(){
        return(
            <View style={styles.main}>
            <FlatList
                data={this.props.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item,i }) => {
                    return (
                        <ListItems 
                            key={i}
                            list={item} 
                            array={this.props.data} 
                            index={this.props.data.indexOf(item)}
                            />
                    );
                  }}
            />
            </View>
        );
    }
}

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

const mapStateToProps = ({ todoListResponse }) => {
    // console.log('globalden Gelen liste objesi ', todoListResponse);
    return { data: todoListResponse.data }
};

export default connect(mapStateToProps, { getTodoList })(Main);