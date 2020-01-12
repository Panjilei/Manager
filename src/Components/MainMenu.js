import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import EmployeeList from './EmployeeList';
import EmployeeCreate from './EmployeeCreate';
import EmployeeEdit from './EmployeeEdit';
import Profile from './Profile';

const drawer = createDrawerNavigator(
    {
        EmployeeList: {
            screen: EmployeeList
        },
        AddNewEmployee: {
            screen: EmployeeCreate
        },
        EditEmployee: {
            screen: EmployeeEdit
        },
        Profile: {
            screen: Profile
        }
    },
    {
        initialRouteName: 'EmployeeList',
        headerMode: 'none'
    }
);

export default createAppContainer(drawer)