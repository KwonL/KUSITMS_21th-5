import React, {Component} from 'react';
import { Image, Text, View, ScrollView, Listview, FlatList, TouchableHighlight, TextInput} from 'react-native';
import * as Progress from 'react-native-progress';
import styles from './styles';
import { KakaoRegularText, KakaoBoldText } from '../../components/StyledText';
import ProductList from './ProductList';

export default HomeScreen = (props) => {

  
  return (
    <ScrollView style={styles.container} >
      <KakaoBoldText style={styles.Title}>식단 추천</KakaoBoldText>


      <View style={styles.delnewline}>
        <TextInput style={styles.input} /*value={this.state.username}*/ /*onChangeText={(text) => this.setState({username: text})}*/
          placeholder={"Search foods"} maxLength={12} multiline={false}/>

        <TouchableHighlight style={styles.button} underlayColor={"#F0F3F4"} onPress={pressButton}>
          <Image
          style={styles.buttonImage}
          source={require('../../assets/images/search.png')}
        />
        </TouchableHighlight>
      </View>

        <View style={{
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
        </View>


      <View style={styles.filterContainer}>
        <Image
          style={styles.filterImage}
          source={require('../../assets/images/recommendScreen/swap_vert-24px.png')}
        />
          <KakaoRegularText style={styles.filterText}>별점순</KakaoRegularText>
      </View>
     
        <ProductList/>
  
    </ScrollView >
  );
}

function pressButton(){
  alert("pressed!")
}
