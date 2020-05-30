import React from 'react';

import {View, ScrollView} from 'react-native' ;
import styles from './styles';
import { KakaoBoldText, KakaoRegularText } from '../../components/StyledText';
import * as Progress from 'react-native-progress';

export default () =>{
  const data = {
    defaultGoal : 2100,
    userGoal : 2123,
    todaycal : 1988,
    todaynutrientsgram : {
      carbohydrate: 112,
      protein: 40,
      fat: 10,
    },
    todaynutrients : {
      carbohydrate: 112/161,
      protein: 40/64,
      fat: 10/43,
    },
  }
  

  return (
    <View style={styles.container}>
      <View 
        style={{
          backgroundColor: 'white',
        }}
      >      
        <KakaoBoldText style = {styles.StatisticText}>분석</KakaoBoldText>
      </View>
      <ScrollView style={styles.container}>
        <View style={[styles.StaticContainer, { height: 320 }]}>
          <KakaoBoldText style = {styles.today}>오늘</KakaoBoldText>
          <KakaoBoldText style = {styles.cal}>Cal  <KakaoBoldText style = {styles.dot}> ●</KakaoBoldText></KakaoBoldText>
          <KakaoRegularText style = {styles.Goal}>목표({data.userGoal} Kcal)대비</KakaoRegularText>      
          <KakaoBoldText style = {styles.todaycal}>{data.todaycal}</KakaoBoldText>
          
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <KakaoRegularText style = {styles.pgbarPercentText2}>탄수화물</KakaoRegularText>
            <KakaoRegularText style = {styles.pgbarPercentText3}>단백질</KakaoRegularText>
            <KakaoRegularText style = {styles.pgbarPercentText4}>지방</KakaoRegularText> 
          </View>

          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Progress.Bar style={{ alignSelf: 'center' , marginLeft : 'auto', marginTop : 5 }} progress={data.todaynutrients.carbohydrate} color="#87A9C3" unfilledColor="#EAE7F0" 
              width={80} height={10} borderRadius={7} />
            <Progress.Bar style={{ alignSelf: 'center' , marginLeft : 28, marginTop : 5 }} progress={data.todaynutrients.protein} color="#D47FA6" unfilledColor="#EAE7F0" 
              width={80} height={10} borderRadius={7} />
            <Progress.Bar style={{ alignSelf: 'center' , marginLeft : 28, marginRight : 'auto',marginTop : 5 }} progress={data.todaynutrients.fat} color="#B5BACE" unfilledColor="#EAE7F0" 
              width={80} height={10} borderRadius={7} />   
          </View>

          <View style={{display: 'flex', flexDirection: 'row'}}>
            <KakaoRegularText style = {styles.pgbarPercentText5}>{data.todaynutrientsgram.carbohydrate}/161g</KakaoRegularText>
            <KakaoRegularText style = {styles.pgbarPercentText6}>{data.todaynutrientsgram.protein}/64g</KakaoRegularText>
            <KakaoRegularText style = {styles.pgbarPercentText7}>{data.todaynutrientsgram.fat}/43g</KakaoRegularText> 
          </View>
        </View>
          <View style={[styles.StaticContainer, {height : 400 }]}>
          <KakaoBoldText style = {{marginRight : 'auto', marginLeft : 'auto', alignSelf : 'center',fontSize : 20}}>오늘의 이야기</KakaoBoldText>
        </View>
      </ScrollView>
    </View>
  );
};
