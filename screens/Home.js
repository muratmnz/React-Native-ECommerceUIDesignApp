import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {images, icons, COLORS, SIZES, FONTS} from '../constants';

const ScrollableTab = ({tabList, selectedTab, onPress}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{marginHorizontal: SIZES.padding}}
      onPress={() => onPress(item)}>
      <Text style={{color: COLORS.secondary, ...FONTS.body2}}>{item.name}</Text>

      {selectedTab.id == item.id && (
        <View
          style={{
            alignItems: 'center',
            marginTop: SIZES.base,
          }}>
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: COLORS.darkGreen,
            }}></View>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={{marginTop: SIZES.padding}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={tabList}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
};

const ScrollableCard = ({navigation, productList}) => {
  //navigate to item's detail screen in TouchableOpacity
  const renderCard = ({item}) => (
    <TouchableOpacity
      style={{marginLeft: SIZES.padding}}
      onPress={() => navigation.navigate('ItemDetail', {itemInfo: item})}>
      <View style={{width: SIZES.width / 2}}>
        <Image
          source={item.image}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: SIZES.radius * 2,
          }}
        />

        <View
          style={{position: 'absolute', top: 15, left: '10%', right: '10%'}}>
          <Text style={{color: COLORS.secondary, ...FONTS.h3}}>
            {item.productName}
          </Text>
        </View>

        <View
          style={{
            position: 'absolute',
            bottom: 20,
            left: 30,
            borderRadius: 15,
            paddingVertical: 10,
            paddingHorizontal: 15,
            backgroundColor: COLORS.transparentLightGray,
          }}>
          <Text style={{...FONTS.h2}}>$ {item.price.toFixed(2)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{marginTop: SIZES.padding}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={productList}
        renderItem={renderCard}
        keyExtractor={(item) => `${item.productId}`}
      />
    </View>
  );
};

const Home = ({navigation}) => {
  const [tabList, setTablist] = useState([
    {
      id: 0,
      name: 'Laptop',
      title: 'laptops',
      productList: [
        {
          productId: 1,
          productName: 'Product 1',
          price: 1000.0,
          image: images.computer2,
        },
        {
          productId: 2,
          productName: 'Product 2',
          price: 800.0,
          image: images.computer3,
        },
        {
          productId: 3,
          productName: 'Product 3',
          price: 850.0,
          image: images.computer1,
        },
      ],
    },
    {
      id: 1,
      name: 'Phone',
      title: 'phones',
      productList: [
        {
          productId: 4,
          productName: 'Product 4',
          price: 350.0,
          image: images.phone1,
        },
        {
          productId: 5,
          productName: 'Product 5',
          price: 500.0,
          image: images.phone2,
        },
        {
          productId: 6,
          productName: 'Product 6',
          price: 650.0,
          image: images.phone3,
        },
      ],
    },
    {
      id: 2,
      name: 'Tvs',
      title: 'televisions',
      productList: [
        {
          productId: 7,
          productName: 'Product 7',
          price: 2000.0,
          image: images.tv1,
        },
        {
          productId: 8,
          productName: 'Product 8',
          price: 2400.0,
          image: images.tv2,
        },
        {
          productId: 9,
          productName: 'Product 9',
          price: 3000.0,
          image: images.tv3,
        },
      ],
    },
    {
      id: 3,
      name: 'Accessories',
      title: 'accessories',
      productList: [
        {
          productId: 10,
          productName: 'Product 10',
          price: 100.0,
          image: images.accessory1,
        },
        {
          productId: 11,
          productName: 'Product 11',
          price: 100.0,
          image: images.accessory2,
        },
        {
          productId: 12,
          productName: 'Product 12',
          price: 200.0,
          image: images.accessory3,
        },
      ],
    },
  ]);

  const [selectedTab, setSelectedTab] = useState({
    id: 0,
    name: 'Laptop',
    title: 'laptops',
    productList: [
      {
        productId: 1,
        productName: 'Product 1',
        price: 1000.0,
        image: images.computer3,
      },
      {
        productId: 2,
        productName: 'Product 2',
        price: 800.0,
        image: images.computer2,
      },
      {
        productId: 3,
        productName: 'Product 3',
        price: 1200.0,
        image: images.computer1,
      },
    ],
  });

  function renderPromotionCard() {
    return (
      <View
        style={[
          styles.shadow,
          {
            flexDirection: 'row',
            marginHorizontal: SIZES.padding,
            padding: SIZES.radius,
            height: 110,
            borderRadius: 20,
            backgroundColor: COLORS.white,
          },
        ]}>
        <View
          style={{
            width: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.lightGray2,
            borderRadius: 20,
          }}>
          <Image
            source={images.phone1}
            resizeMode="contain"
            style={{
              width: '60%',
              height: '60%',
            }}
          />
        </View>

        {/* Wordings section */}
        <View
          style={{flex: 1, marginLeft: SIZES.radius, justifyContent: 'center'}}>
          <Text style={{...FONTS.h2}}>Special Offer</Text>
          <Text style={{...FONTS.body3}}>Adding to your cart</Text>
        </View>

        {/* Button */}
        <View
          style={{
            marginRight: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              justifyContent: 'center',
              alignItems: 'center',
              height: '70%',
              width: 40,
              borderRadius: 10,
            }}
            onPress={() => {
              console.log('Promo on clicked');
            }}>
            <Image
              source={icons.chevron}
              resizeMode="contain"
              style={{
                height: '50%',
                width: '50%',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  //render
  function renderHeader() {
    return (
      <View style={{paddingHorizontal: SIZES.padding}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => console.log('clicked menu')}>
            <Image
              source={icons.menu}
              resizeMode="contain"
              style={{width: 25, height: 25}}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 1, alignItems: 'flex-end'}}
            onPress={() => console.log('clicked cart')}>
            <Image
              source={icons.cart}
              resizeMode="contain"
              style={{width: 25, height: 25}}></Image>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderTitle(title) {
    return (
      <View style={{marginTop: SIZES.padding, marginHorizontal: SIZES.padding}}>
        <Text style={{color: COLORS.black, ...FONTS.largeTitle}}>
          Collection of
        </Text>
        <Text style={{color: COLORS.black, ...FONTS.largeTitle}}>{title}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true}></StatusBar>
      {renderHeader()}
      {renderTitle(selectedTab.title)}

      <ScrollableTab
        tabList={tabList}
        selectedTab={selectedTab}
        onPress={(item) => setSelectedTab(item)}
      />

      <View style={{flex: 1}}>
        <ScrollableCard
          navigation={navigation}
          productList={selectedTab.productList}
        />
      </View>
      {/* Footer card part */}
      <View style={{height: '19%', justifyContent: 'flex-end'}}>
        {renderPromotionCard()}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightwhite,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
});

export default Home;
