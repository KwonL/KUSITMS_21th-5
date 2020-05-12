import React from 'react';
import { Image, Text, View, FlatList, ScrollView } from 'react-native';
import * as Progress from 'react-native-progress';
import styles from './styles';

export default HomeScreen = (props) => {
  const SHOP_DATA = [
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

  return (
    <ScrollView style={styles.container} >
      <View style={styles.sectionContainer}>
        <Text style={styles.msgText}>안녕하세요 규원님!</Text>
        <View style={{
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <Image
            style={styles.characterImage}
            source={require('../../assets/images/examples/character-ex.png')}
          />
        </View>
        <Text style={[styles.msgText, { textAlign: 'right' }]}>몸이 무거워서 일어날 수가 없어..</Text>
      </View>
      <View style={styles.sectionContainer}>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Text style={styles.msgText}>오늘 규원님의 영양 상태</Text>
          <View style={styles.explainContainer}>
            <View style={[styles.dot, { backgroundColor: '#C0EBAA' }]} />
            <Text style={styles.colorExplainText}> 탄수화물</Text>
          </View>
          <View style={styles.explainContainer}>
            <View style={[styles.dot, { backgroundColor: '#FEF5AE' }]} />
            <Text style={styles.colorExplainText}> 단백질</Text>
          </View>
          <View style={styles.explainContainer}>
            <View style={[styles.dot, { backgroundColor: '#CDE9FB' }]} />
            <Text style={styles.colorExplainText}> 지방</Text>
          </View>
        </View>
        <Text style={{
          textAlign: 'center',
          marginVertical: 50,
          fontSize: 20
        }}>영양분 섭취가 부족해요!</Text>
        <View style={styles.progressBarContainer}>
          <Progress.Bar style={styles.progressBar} progress={0.5} color='#C0EBAA' width={300} height={20} />
          <Progress.Bar style={styles.progressBar} progress={0.3} color='#FEF5AE' width={300} height={20} />
          <Progress.Bar style={styles.progressBar} progress={0.8} color='#CDE9FB' width={300} height={20} />
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.msgText}>규원님을 위한 식단 추천</Text>
        <FlatList
          style={styles.flatList}
          data={SHOP_DATA}
          renderItem={({ item }) => {
            return (
              <View style={styles.foodCardContainer}>
                <Image source={item.image} style={styles.cardImage} />
                <Text style={styles.shopCardDescriptionText}> {item.description}</Text>
                <Text style={styles.shopCardPriceText}>{item.price}</Text>
              </View>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
        />
      </View>
    </ScrollView >
  );
}
