import React from 'react';
import { FlatList } from 'react-native';
import ProductItem from './ProductItem';

const products = [
  {
    id: 1,
    image: require('../../assets/images/recommendScreen/salmon.png'),
    title: '연어 초밥',
    store: '공릉 스시락',
    price: '10,000',
    rate: '4.8',
    description: '탄단지의 적절한 조화! 맛있고 건강한 다이어트 식품',
    delivery: false,
  },
  {
    id: 2,
    image: require('../../assets/images/recommendScreen/gscubesteak.png'),
    title: '큐브 스테이크 볼',
    store: 'GS 편의점',
    price: '4,800',
    rate: '4.6',
    description: '집 앞에서 구하는 편리한 다이어트 건강식! 양질의 단백질과 섬유질이 가득',
    delivery: true,
  },
  {
    id: 3,
    image: require('../../assets/images/recommendScreen/tanduri.png'),
    title: '탄두리 닭가슴살 현미밥',
    store: '한끼마켓',
    price: '3,900',
    rate: '4.7',
    description: '맛까지 놓치지 않는 건강 간편식! 묶음 구매시 할인 이벤트 진행중',
    delivery: true,
  },
  {
    id: 4,
    image: require('../../assets/images/recommendScreen/chicken.png'),
    title: '닭가슴살 도시락(210gx10팩)',
    store: '맛있닭',
    price: '40,000',
    rate: '4.9',
    description: '다이어터들의 스테디 셀러 상품! 매일 간편하게 챙겨먹는 단백질 도시락',
    delivery: false,
  },
  {
    id: 5,
    image: require('../../assets/images/recommendScreen/fish.png'),
    title: '고등어 구이',
    store: '까시발라 생선구이',
    price: '10,000',
    rate: '4.5',
    description: '본 매장만의 방식으로 구워낸 영양 고등어 배달 이벤트 진행 중!',
    delivery: 'true',
  },
];

export default () => {
  const data = products.map((product) => Object.assign(product, { key: product.title }));

  const renderItem = ({ item }) => (
    <ProductItem
      imageURL={item.image}
      title={item.title}
      store={item.store}
      price={item.price}
      rate={item.rate}
      description={item.description}
      delivery={item.delivery}
    />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
    />
  );
};
