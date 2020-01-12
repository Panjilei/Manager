import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import _ from 'lodash';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import { getEmployeeList } from '../actions';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {
    static navigationOptions = {
        drawerLabel: 'List Employee',
    };

    componentWillMount() {
        this.props.getEmployeeList();
    }

    renderItem = ({item}) => {
        return <EmployeeListItem employee={item} navigation={this.props.navigation} />;
    }
    render() {
        return (
            <View>
                <Header 
                    placement="left"
                    leftComponent={{
                        icon: 'menu',
                        color: '#fff',
                        onPress: () => this.props.navigation.toggleDrawer()
                    }}
                    centerComponent={{ text: 'List Employee', style: { color: '#fff' } }}
                />
                <Text>Ini Page Employee List</Text>
                <FlatList 
                    data={this.props.employees}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });

    return { employees };
};

export default connect(mapStateToProps, { getEmployeeList })(EmployeeList);