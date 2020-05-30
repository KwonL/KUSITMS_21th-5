import React from 'react';
import { Image, Text, View, ScrollView } from 'react-native';
import { PieChart } from 'react-native-svg-charts'
import * as Progress from 'react-native-progress';
import styles from './styles';
import { KakaoRegularText, KakaoBoldText } from '../../components/StyledText';

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
      <KakaoBoldText style={styles.welcomeText}>안녕하세요, 이규원님</KakaoBoldText>

      <View style={[styles.sectionContainer, { height: 233 }]}>
        <View style={{
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <Image
            style={styles.characterImage}
            //source={require('../../assets/images/examples/character-ex.png')}
          />
        </View>
      </View>

      <KakaoRegularText style={styles.msgText}>목표 칼로리 달성률</KakaoRegularText>

      <View style={styles.sectionContainer}>
        <Progress.Bar style={styles.progressBar} progress={data.calorie_percent} color='#87A9C3' unfilledColor='#EBEFF2' width={282} height={29} borderRadius={7}>
          <KakaoBoldText style={styles.progressText}>{data.calorie_percent * 100}%</KakaoBoldText>
        </Progress.Bar>
        <Text style={styles.calorieText}>{data.calorie}kcal</Text>
      </View>

      <KakaoRegularText style={styles.msgText}>오늘 규원님의 영양 상태</KakaoRegularText>

      <View style={[styles.sectionContainer, { marginBottom: 100 }]}>
        <KakaoBoldText style={styles.nutAlertText}>영양분 섭취가 부족해요!</KakaoBoldText>

        <View style={{ justifyContent: 'center', flex: 1 }}>
          <KakaoRegularText style={styles.graphCalText}>
            {`${data.calorie}\nKcal`}
          </KakaoRegularText>
          <PieChart
            style={{ width: 250, height: 250 }}
            valueAccessor={({ item }) => item.percent}
            data={[
              {
                key: 1,
                percent: data.nutrients.carbohydrate,
                svg: { fill: '#EDAB72' }
              },
              {
                key: 2,
                percent: data.nutrients.protein,
                svg: { fill: '#CB4F6C' }
              },
              {
                key: 3,
                percent: data.nutrients.fat,
                svg: { fill: '#5C82E8' }
              }
            ]}
            spacing={0}
            outerRadius={'100%'}
            innerRadius={'75%'}
            startAngle={Math.PI * 1 / 3}
            endAngle={Math.PI * 7 / 3}
          />
        </View>

        <View>
          <View style={{ display: 'flex', flexDirection: 'row', marginTop: 45, alignItems: 'center' }}>
            <View style={[styles.dot, { backgroundColor: '#EDAB72' }]} />
            <KakaoRegularText style={{ marginLeft: 16 }}>탄수화물</KakaoRegularText>
            <KakaoRegularText style={{ marginLeft: 150, color: '#352641' }}>{data.nutrients.carbohydrate * 100}%</KakaoRegularText>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', marginTop: 28 }}>
            <View style={[styles.dot, { backgroundColor: '#CB4F6C' }]} />
            <KakaoRegularText style={{ marginLeft: 16 }}>단백질</KakaoRegularText>
            <KakaoRegularText style={{ marginLeft: 'auto', color: '#352641' }}>{data.nutrients.protein * 100}%</KakaoRegularText>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', marginTop: 28, marginBottom: 70 }}>
            <View style={[styles.dot, { backgroundColor: '#5C82E8' }]} />
            <KakaoRegularText style={{ marginLeft: 16 }}>지방</KakaoRegularText>
            <KakaoRegularText style={{ marginLeft: 'auto', color: '#352641' }}>{data.nutrients.fat * 100}%</KakaoRegularText>
          </View>
        </View>
      </View>

    </ScrollView >
  );
}
