import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/CameraScreen';
import GalleryScreen from '../screens/GalleryScreen';
import RecommendScreen from '../screens/RecommendScreen';
import StatisticScreen from './StatisticTopNavigator';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

const styles = StyleSheet.create({
  iconImage: {
    height: 24,
    width: 24,
  },
});

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        style: {
          height: 60,
        },
        showLabel: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Image
              style={styles.iconImage}
              source={require('../assets/images/bottom-tab/home.png')}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Food"
        component={RecommendScreen} // 추천화면
        options={{
          tabBarIcon: () => (
            <Image
              style={styles.iconImage}
              source={require('../assets/images/bottom-tab/restaurant.png')}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarIcon: () => (
            <Image
              style={[styles.iconImage, { height: 41, width: 41 }]}
              source={require('../assets/images/bottom-tab/lens.png')}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Statistics"
        component={StatisticScreen}
        options={{
          tabBarIcon: () => (
            <Image
              style={styles.iconImage}
              source={require('../assets/images/bottom-tab/bar_chart.png')}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{
          tabBarIcon: () => (
            <Image
              style={styles.iconImage}
              source={require('../assets/images/bottom-tab/perm_media.png')}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
