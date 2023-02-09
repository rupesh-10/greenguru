import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../consts/colors';
const ShopDetailsScreen = ({navigation, route}) => {
  const shop = route.params;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.backGrey}}>
      <View style={style.header}>
        <Text style={{fontWeight: 'bold', marginLeft:15, fontSize: 22, fontWeight:'700'}}>Details</Text>
       
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* shop image */}

        <ImageBackground
          resizeMode="cover"
          style={style.backgroundImage}
          source={{uri:shop.image}}>
          <View
            style={{
              height: 60,
              width: 70,
              backgroundColor: COLORS.primary,
              position: 'absolute',
              borderTopLeftRadius: 15,
              right: 0,
              bottom: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 5,
              }}>
              <Icon name="star" color={COLORS.yellow} size={18} />
              <Text
                style={{
                  fontSize: 10,
                  color: COLORS.white,
                  fontWeight: 'bold',
                }}>
                4.5
              </Text>
            </View>
            <Text
              style={{fontSize: 9, color: COLORS.white, fontWeight: 'bold'}}>
              250 Reviews
            </Text>
          </View>
        </ImageBackground>

        <View style={style.detailsContainer}>
          <Text
            style={{fontSize: 20, fontWeight: 'bold', color: COLORS.primary}}>
            {shop.name}
          </Text>
          <Text
            style={{
              marginVertical: 20,
              fontWeight: 'bold',
              fontSize: 16,
              color: COLORS.primary,
            }}>
            Description
          </Text>
          <Text style={{color: COLORS.dark, fontSize: 15, lineHeight: 20}}>
            {shop.description}
          </Text>
          <View
            style={{
              marginVertical: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{color: COLORS.darkGreen, fontSize: 18, fontWeight: 'bold'}}>
                <Icon name="map-marker" size={20} color={COLORS.darkGreen} />{shop.location}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  backgroundImage: {
    marginHorizontal: 20,
    height: 300,
    borderRadius: 15,
    overflow: 'hidden',
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  ratingTag: {
    height: 30,
    width: 35,
    backgroundColor: COLORS.blue,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {flex: 1, paddingHorizontal: 20, marginTop: 40},

});

export default ShopDetailsScreen;