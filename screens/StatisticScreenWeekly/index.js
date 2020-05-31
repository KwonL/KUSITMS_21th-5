// index.js
import React, { useEffect, useState } from 'react';
import { Image, View, ScrollView } from 'react-native';
import * as Progress from 'react-native-progress';
import { BarChart, PieChart, XAxis } from 'react-native-svg-charts';
// import * as scale from 'd3-scale';
import styles from './styles';
import { KakaoRegularText, KakaoBoldText } from '../../components/StyledText';
import axios from '../../utils/axios';

export default () => {
  const graphdata = [1000, 1800, 1500, 1200, 600, 900, 1100];

  const [pichartdata, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await axios.get('/login');
      const sampleData = {
        calorie: 2332,
        nutrients: {
          carbohydrate: 0.5,
          protein: 0.25,
          fat: 0.25,
        },
      };
      pichartdata.name = res.data.kor_name;
      setData({
        ...sampleData,
        ...pichartdata,
      });
      setLoading(false);
    })();
  }, []);

  return loading ? <View /> : (
    <ScrollView style={styles.container}>
      <View style={{
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
      />

      <View style={styles.productContainer}>

        <KakaoBoldText style={styles.weekText}>지난 한 주</KakaoBoldText>
      </View>
      <KakaoBoldText style={styles.calText}>
        Cal
        {' '}
        <KakaoBoldText style={styles.circleText}> ●</KakaoBoldText>
      </KakaoBoldText>
      <View style={{
        height: 230,
        paddingLeft: 100,
        pdadingRight: 0,
        width: 310,
        paddingTop: 20,
        paddingBottom: 20,
      }}
      >
        <BarChart
          style={{ flex: 1 }}
          data={graphdata}
          gridMin={0}
          svg={{ fill: '#B5BACE' }}
        />

        <XAxis
          style={{ marginTop: 11 }}
          data={graphdata}
          formatLabel={(value, index) => index}
          labelStyle={{ color: 'black' }}
        />
      </View>

      <View style={styles.weekContainer}>
        <KakaoRegularText style={styles.weekText}>지난 한 주 평균 영양상태</KakaoRegularText>
      </View>
      <View style={styles.secondContainer}>
        <View style={{ justifyContent: 'center', flex: 1, marginBottom: 15 }}>
          <View style={styles.graphCalText}>
            <KakaoRegularText style={{ fontSize: 32, textAlign: 'center' }}>
              {pichartdata.calorie}
            </KakaoRegularText>
            <KakaoRegularText style={{
              fontSize: 11, textAlign: 'center', color: '#352641', opacity: 53,
            }}
            >
              Kcal
            </KakaoRegularText>
          </View>
          <PieChart
            style={{ width: 200, height: 200 }}
            valueAccessor={({ item }) => item.percent}
            data={[
              {
                key: 1,
                percent: pichartdata.nutrients.carbohydrate,
                svg: { fill: '#608BAC' },
              },
              {
                key: 2,
                percent: pichartdata.nutrients.protein,
                svg: { fill: '#D47FA6' },
              },
              {
                key: 3,
                percent: pichartdata.nutrients.fat,
                svg: { fill: '#B5BACE' },
              },
            ]}
            spacing={0}
            outerRadius="100%"
            innerRadius="75%"
            startAngle={Math.PI / 3}
            endAngle={Math.PI * (7 / 3)}
          />
        </View>
        <View>
          <View style={styles.nutpgContainer}>
            <KakaoRegularText style={styles.pgbarNutText}>
              탄수화물
            </KakaoRegularText>
            <Progress.Bar style={{ alignSelf: 'center' }} progress={pichartdata.nutrients.carbohydrate} color="#87A9C3" unfilledColor="#EAE7F0" width={183} height={19} borderRadius={7} />
            <KakaoRegularText style={styles.pgbarPercentText}>
              {pichartdata.nutrients.carbohydrate * 100}
              %
            </KakaoRegularText>
          </View>
          <View style={styles.nutpgContainer}>
            <KakaoRegularText style={styles.pgbarNutText}>
              단백질
            </KakaoRegularText>
            <Progress.Bar progress={pichartdata.nutrients.protein} color="#D47FA6" unfilledColor="#EAE7F0" width={183} height={19} borderRadius={7} />
            <KakaoRegularText style={styles.pgbarPercentText}>
              {pichartdata.nutrients.protein * 100}
              %
            </KakaoRegularText>
          </View>
          <View style={styles.nutpgContainer}>
            <KakaoRegularText style={styles.pgbarNutText}>
              지방
            </KakaoRegularText>
            <Progress.Bar progress={pichartdata.nutrients.fat} color="#B5BACE" unfilledColor="#EAE7F0" width={183} height={19} borderRadius={7} />
            <KakaoRegularText style={styles.pgbarPercentText}>
              {pichartdata.nutrients.fat * 100}
              %
            </KakaoRegularText>
          </View>
        </View>

      </View>

      <View style={styles.weekContainer}>
        <KakaoRegularText style={styles.weekText}>지난 한 주 이야기</KakaoRegularText>
      </View>

      <View style={styles.filterContainer}>
        <Image
          style={styles.filterImage}
          source={require('../../assets/images/statistics/favorite.png')}
        />
        <KakaoRegularText style={styles.filterText}>건강</KakaoRegularText>
      </View>
      <KakaoRegularText style={styles.comment}>
        이번주는 목표 칼로리에 많이 도달했습니다!
        식사 사진을 분석한 결과, 하루하루 영양소가 균형이 잡히고 있습니다.
        조금만 더 노력하면 건강한 사람이 될 것입니다. 하지만 저번주에 비해 단백질을 과다섭취 하셨습니다.
        어쩌면 목표 칼로리에 더 가까이 다가가지 못한 것이 하루 단백질 적정량을 초과했기 때문일 수 있습니다.
      </KakaoRegularText>

      <View style={styles.filterContainer}>
        <Image
          style={styles.filterImage}
          source={require('../../assets/images/statistics/error.png')}
        />
        <KakaoRegularText style={styles.filterText}>주의</KakaoRegularText>
      </View>
      <KakaoRegularText style={styles.comment}>
        평균 필요 이상의 단백질을 섭취할 경우에는 대부분 칼로리가 당분으로 전환된 후 지방으로 변하기 때문에 주의해야 합니다.
        오히려 체중이 증가할 수 있으며 체지방 과다로 다이어트에 실패할 수 있습니다. 또한 몸속에 질소 노폐물이 많아져 신장에 스트레스 줄 수 있으며,
        만성 탈수증과 혈중 요산 수치를 높여 통풍, 신장결석, 골다공증 등이 발생할 수 있습니다. 급격한 감정변화도 일어납니다.
      </KakaoRegularText>

      <View style={styles.filterContainer}>
        <Image
          style={styles.filterImage}
          source={require('../../assets/images/statistics/smile.png')}
        />
        <KakaoRegularText style={styles.filterText}>조언</KakaoRegularText>
      </View>
      <KakaoRegularText style={styles.comment}>
        단백질을 섭취할 시에는 과도한 섭취가 아닌 적당량을 섭취하시는 것이 좋으며,
        요즘 유행하는 단백질 파우더보다는 식품에서 섭취하는 양질의 단백질을 섭취하는 것이 중요합니다.
        적절한 단백질 섭취에 도움을 주는 음식은 두부, 오징어, 계란, 소고기, 그리고 닭가슴살이 있습니다.
      </KakaoRegularText>

    </ScrollView>
  );
};
