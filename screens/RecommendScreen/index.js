import React from 'react';
import {
  Image, View, TouchableHighlight, TextInput,
} from 'react-native';
import styles from './styles';
import { KakaoRegularText, KakaoBoldText } from '../../components/StyledText';
import ProductList from './ProductList';

export default () => (
  <View style={styles.container}>
    <KakaoBoldText style={styles.Title}>식단 추천</KakaoBoldText>

    <View style={styles.delnewline}>
      <TextInput
        style={styles.input} /* value={this.state.username} */
        /* onChangeText={(text) => this.setState({username: text})} */
        placeholder="Search foods"
        maxLength={12}
        multiline={false}
      />

      <TouchableHighlight style={styles.button} underlayColor="#F0F3F4">
        <Image
          style={styles.buttonImage}
          source={require('../../assets/images/search.png')}
        />
      </TouchableHighlight>
    </View>

    <View style={styles.filterContainer}>
      <Image
        style={styles.filterImage}
        source={require('../../assets/images/recommendScreen/swap_vert-24px.png')}
      />
      <KakaoRegularText style={styles.filterText}>별점순</KakaoRegularText>
    </View>

    <ProductList />

  </View>
);
