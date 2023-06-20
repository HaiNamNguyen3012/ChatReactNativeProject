import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NotImplementedScreen from "../screens/NotImplementedSreen";
import SettingsScreen from "../screens/SettingsScreen";
import ChatsScreen from "../screens/ChatsScreen";
import {Ionicons, Entypo} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteNam="Chats" screenOptions={{tabBarStyle: {backgroundColor: 'whitesmoke'}, headerStyle : {backgroundColor: 'whitesmoke'}}}>
      <Tab.Screen name="Status" component={NotImplementedScreen} options={{ tabBarIcon: ({color, size}) => <Ionicons name="home-outline" size = {size} color = {color}/>}} />
      <Tab.Screen name="Calls" component={NotImplementedScreen} options={{ tabBarIcon: ({color, size}) => <Ionicons name="call-outline" size = {size} color = {color}/>}} />
      <Tab.Screen name="Camera" component={NotImplementedScreen} options={{ tabBarIcon: ({color, size}) => <Ionicons name="camera-outline" size = {size} color = {color}/>}} />
      <Tab.Screen
        name="Chats"
        component={ChatsScreen}
        options={({navigation}) => ({
            tabBarIcon: ({color, size}) => (
                <Ionicons name="chatbubble-outline" size = {size} color = {color}/>
            ),
            headerRight: () =>(
                <Entypo
                    onPress={() => navigation.navigate('Contacts')}
                    name="new-message"
                    size={24}
                    color="royalblue"
                    style={{ marginRight: 15}}
                />
            ),
        })}
      />
      <Tab.Screen
        name="Setting"
        component={SettingsScreen}
        options={{
            tabBarIcon: ({color, size}) => (
                <Ionicons name="settings-outline" size = {size} color = {color}/>
            ),
        }}
      />
    </Tab.Navigator>
  );
};
export default MainTabNavigator;
