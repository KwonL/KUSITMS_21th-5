import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Image } from 'react-native';
import DailyScreen from '../screens/StatisticScreenDaily';
import WeeklyScreen from '../screens/StatisticScreenWeekly';
import { KakaoBoldText } from '../components/StyledText';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    style={{ backgroundColor: 'white' }}
    tabBarOptions={{
      activeTintColor: 'white',
      inactiveTintColor: '#C1BAC6',
      labelStyle: {
        fontFamily: 'kakao-regular',
        fontSize: 12,
      },
      tabStyle: {
        height: 38,
      },
      indicatorStyle: {
        borderRadius: 10,
        height: 32,
        backgroundColor: '#608BAC',
      },
    }}
  >
    <Tab.Screen
      name="Today"
      component={DailyScreen}
    />
    <Tab.Screen
      name="Week"
      component={WeeklyScreen}
    />
    <Tab.Screen
      name="Month"
      component={WeeklyScreen}
    />
  </Tab.Navigator>
);

export default () => (
  <View style={{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  }}
  >
    <View style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    }}
    >
      <KakaoBoldText
        style={{
          backgroundColor: 'white',
          fontSize: 26,
          marginLeft: 41,
          marginTop: 37,
          paddingBottom: 15,
        }}
      >
        분석
      </KakaoBoldText>
      <Image
        style={{
          width: 32,
          height: 32,
          marginRight: 41,
          marginTop: 37,
        }}
        source={require('../assets/images/calendar.png')}
      />
    </View>
    <TabNavigator />
  </View>
);
