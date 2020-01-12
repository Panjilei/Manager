import React, { Component } from 'react';
import { Text, Alert, View } from 'react-native';
import { Card, CardSection, Button } from './common';
import { Header } from 'react-native-elements';
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';
import { employeeSave, employeeDelete } from '../actions';
import { text } from 'react-native-communications';

class EmployeeEdit extends Component {
    static navigationOptions = {
        drawerLabel: () => null
    };
    onButtonTextPress = () => {
        const { phone, shift } = this.props;

        text(phone, `Your upcoming shift is on ${shift}` );
    }    
    onButtonPress = () => {
        const { name, phone, shift, uid } = this.props;

        this.props.employeeSave(name, phone, shift, uid);
    }    
    onButtonFirePress = () => {
        //this.setState({ showModal: true });
        Alert.alert(
            'Are you sure to fire him/her?',
            '',
            [
                { text: 'No', onPress: () => {}, style: 'cancel' },
                { text: 'Yes', onPress: this.onAccept },
            ],
            { cancelable: false }
        );
    }

    onAccept = () => {
        this.props.employeeDelete(this.props.uid);
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
                    centerComponent={{ text: 'Edit Employee', style: { color: '#fff' } }}
                    rightComponent={{
                        icon: 'home',
                        color: '#fff',
                        onPress: () => this.props.navigation.navigate('EmployeeList')
                    }}
                />
                <Text>Ini Page Employee Edit</Text>
                <Card>
                    <EmployeeForm />
                    <CardSection>
                        <Button onPress={this.onButtonPress}>
                            Save
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.onButtonTextPress}>
                            Text Schedule
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.onButtonFirePress}>
                            Fire
                        </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift, uid } = state.employeeForm;

    return { name, phone, shift, uid };
};

export default connect(mapStateToProps, { employeeSave, employeeDelete })(EmployeeEdit);