import React from 'react';
import { Image, Text, View, FlatList, ScrollView } from 'react-native';
import * as Progress from 'react-native-progress';
import styles from './styles';

export default HomeScreen = (props) => {
  const data = {
    calorie: 2332,
    calorie_percent: 0.8,
    nutrients: {
      carbohydrate: 0.5,
      protein: 0.25,
      fat: 0.25
    },
    shop: [
      {
        id: 1,
        image: require("../../assets/images/examples/51ecf486857b199be7d6cfa602edcbf9.jpg"),
        description: "[맛있닭] 체중 조절 식단, 다이어트 도시락! & 소스 증정",
        price: "₩19,500"
      },
      {
        id: 2,
        image: require("../../assets/images/examples/hjan_6SecZfmOkSxpTwW.jpg"),
        description: "다노 다노 한 끼 도시락",
        price: '₩19,500'
      },
      {
        id: 2,
        image: require("../../assets/images/robot-prod.png"),
        description: "테스트 테스트",
        price: '₩19,500'
      }
    ]
  }

  return (
    <ScrollView style={styles.container} >
      <Text style={styles.welcomeText}>안녕하세요, 이규원님</Text>
      <View style={[styles.sectionContainer, { height: 233 }]}>
        <View style={{
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <Image
            style={styles.characterImage}
          // source={require('../../assets/images/examples/character-ex.png')}
          />
        </View>
      </View>
      <Text style={styles.msgText}>목표 칼로리 달성률</Text>
      <View style={styles.sectionContainer}>
        <Progress.Bar style={styles.progressBar} progress={data.calorie_percent} color='#87A9C3' unfilledColor='#EBEFF2' width={282} height={29} borderRadius={7}>
          <Text style={styles.progressText}>{data.calorie_percent * 100}%</Text>
        </Progress.Bar>
        <Text style={styles.calorieText}>{data.calorie}kcal</Text>
      </View>
      <Text style={styles.msgText}>오늘 규원님의 영양 상태</Text>
      <View style={[styles.sectionContainer, { marginBottom: 100 }]}>
        <Text style={styles.nutAlertText}>영양분 섭취가 부족해요!</Text>
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 45 }}>
          <View style={[styles.dot, { backgroundColor: '#EDAB72' }]} />
          <Text style={{ marginLeft: 16 }}>탄수화물</Text>
          <Text style={{ marginLeft: 167, color: '#352641' }}>{data.nutrients.carbohydrate}%</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 28 }}>
          <View style={[styles.dot, { backgroundColor: '#CB4F6C' }]} />
          <Text style={{ marginLeft: 16 }}>탄수화물</Text>
          <Text style={{ marginLeft: 167, color: '#352641' }}>{data.nutrients.protein}%</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 28, marginBottom: 70 }}>
          <View style={[styles.dot, { backgroundColor: '#5C82E8' }]} />
          <Text style={{ marginLeft: 16 }}>탄수화물</Text>
          <Text style={{ marginLeft: 167, color: '#352641' }}>{data.nutrients.fat}%</Text>
        </View>
      </View>
    </ScrollView >
  );
}
