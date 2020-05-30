import React from 'react';

import { Image, View, ScrollView } from 'react-native';
import * as Progress from 'react-native-progress';
import styles from './styles';
import { KakaoBoldText, KakaoRegularText } from '../../components/StyledText';

export default () => {
  const data = {
    defaultGoal: 2100,
    userGoal: 2123,
    todaycal: 1988,
    todaynutrientsgram: {
      carbohydrate: 112,
      protein: 40,
      fat: 10,
    },
    todaynutrients: {
      carbohydrate: 112 / 161,
      protein: 40 / 64,
      fat: 10 / 43,
    },
  };


  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'white',
        }}
      >
        <KakaoBoldText style={styles.StatisticText}>분석</KakaoBoldText>
      </View>
      <ScrollView style={styles.container}>
        <View style={[styles.StaticContainer, { height: 320 }]}>
          <KakaoBoldText style={styles.today}>오늘</KakaoBoldText>
          <KakaoBoldText style={styles.cal}>
            Cal
            {' '}
            <KakaoBoldText style={styles.dot}> ●</KakaoBoldText>
          </KakaoBoldText>
          <KakaoRegularText style={styles.Goal}>
            목표(
            {data.userGoal}
            {' '}
            Kcal)대비
          </KakaoRegularText>
          <KakaoBoldText style={styles.todaycal}>{data.todaycal}</KakaoBoldText>

          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <KakaoRegularText style={styles.pgbarPercentText2}>탄수화물</KakaoRegularText>
            <KakaoRegularText style={styles.pgbarPercentText3}>단백질</KakaoRegularText>
            <KakaoRegularText style={styles.pgbarPercentText4}>지방</KakaoRegularText>
          </View>

          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Progress.Bar
              style={{ alignSelf: 'center', marginLeft: 'auto', marginTop: 5 }}
              progress={data.todaynutrients.carbohydrate}
              color="#87A9C3"
              unfilledColor="#EAE7F0"
              width={80}
              height={10}
              borderRadius={7}
            />
            <Progress.Bar
              style={{ alignSelf: 'center', marginLeft: 28, marginTop: 5 }}
              progress={data.todaynutrients.protein}
              color="#D47FA6"
              unfilledColor="#EAE7F0"
              width={80}
              height={10}
              borderRadius={7}
            />
            <Progress.Bar
              style={{
                alignSelf: 'center', marginLeft: 28, marginRight: 'auto', marginTop: 5,
              }}
              progress={data.todaynutrients.fat}
              color="#B5BACE"
              unfilledColor="#EAE7F0"
              width={80}
              height={10}
              borderRadius={7}
            />
          </View>

          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <KakaoRegularText style={styles.pgbarPercentText5}>
              {data.todaynutrientsgram.carbohydrate}
              /161g
            </KakaoRegularText>
            <KakaoRegularText style={styles.pgbarPercentText6}>
              {data.todaynutrientsgram.protein}
              /64g
            </KakaoRegularText>
            <KakaoRegularText style={styles.pgbarPercentText7}>
              {data.todaynutrientsgram.fat}
              /43g
            </KakaoRegularText>
          </View>
        </View>

        <View style={styles.dayContainer}>
          <KakaoRegularText style={styles.dayText}>오늘 이야기</KakaoRegularText>
        </View>

        <View style={styles.filterContainer}>
          <Image
            style={styles.filterImage}
            source={require('../../assets/images/statistics/favorite.png')}
          />
          <KakaoRegularText style={styles.filterText}>건강</KakaoRegularText>
        </View>

        <KakaoRegularText style={styles.comment}>
          오늘은 어제에 비해 탄수화물을 많이 섭취하셨습니다. 식사 사진을 분석한 결과, 점심과 저녁에 흰 쌀밥을 과도하게 섭취하는 경향이 있는 것을 알 수 있습니다.
          탄수화물은 뇌가 움직이는데 꼭 필요한 에너지원으로 하루 섭취량의 65% 정도를 탄수화물로 섭취하는 것이 바람직합니다.
        </KakaoRegularText>

        <View style={styles.filterContainer}>
          <Image
            style={styles.filterImage}
            source={require('../../assets/images/statistics/error.png')}
          />
          <KakaoRegularText style={styles.filterText}>주의</KakaoRegularText>
        </View>
        <KakaoRegularText style={styles.comment}>
          우리 몸에 탄수화물이 들어오면 위에서 포도당으로 분해되고 인슐린은 포도당을 각 세포로 보내 에너지로 사용할 수 있게 합니다.
          이 때, 필요한 에너지양보다 많이 섭취할 경우 과잉 탄수화물의 일부는 지방으로 전환되어 주로 복부에 저장됩니다.
          따라서 탄수화물의 과다 섭취는 인슐린을 지나치게 분비시켜 체내 지방 및 콜레스테롤을 축적시키므로 당뇨나 고혈압, 심장병, 비만 등을 유발할 수 있습니다.
        </KakaoRegularText>

        <View style={styles.filterContainer}>
          <Image
            style={styles.filterImage}
            source={require('../../assets/images/statistics/smile.png')}
          />
          <KakaoRegularText style={styles.filterText}>조언</KakaoRegularText>
        </View>
        <KakaoRegularText style={styles.comment}>
          좋은 탄수화물을 섭취하면 어떨까요? 혈당지수가 낮고 섬유질이 많은 탄수화물인 현미, 잡곡, 통밀, 고구마 등을 드셔보세요.
          그리고 충분한 단백질을 섭취하는 것도 좋을 것 같습니다.
          단백질은 인슐린의 반대로 작용하는 글루카곤이라는 호르몬의 분비를 촉진하여 과도한 인슐린 분비를 억제합니다.
        </KakaoRegularText>

      </ScrollView>
    </View>
  );
};
