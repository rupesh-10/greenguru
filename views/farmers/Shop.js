import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import shops from '../consts/shops';
const {width} = Dimensions.get('screen');
import commonStyles from "../../assets/styles/common";

const ShopScreen = ({navigation}) => {
  const categoryItems = [
    {name: 'Seeds', iconName: 'sprout-outline'},
    {name: 'Fertilizers', iconName: 'spray-bottle'},
    {name: 'Vitamins', iconName: 'bottle-tonic'},
  ];

  const ListCategories = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    return (
      <View style={[style.categoriesContainer]}>
        {categoryItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View
              style={[
                style.categoryItemBtn,
                {
                  backgroundColor:
                    selectedCategoryIndex == index
                      ? COLORS.primary
                      : COLORS.light,
                },
              ]}>
              <Icon
                name={item.iconName}
                size={20}
                color={
                  selectedCategoryIndex == index ? COLORS.white : COLORS.primary
                }
              />
              <Text
                style={[
                  style.categoryText,
                  {
                    color:
                      selectedCategoryIndex == index
                        ? COLORS.white
                        : COLORS.primary,
                  },
                ]}>
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Card = ({shop}) => {
    return (
      <Pressable
        onPress={() => navigation.navigate('ShopDetails', shop)}>
        <View style={style.card}>
          <View style={style.iconContainer}>
            <Icon
              name="heart"
              color={shop.liked ? COLORS.red : COLORS.primary}
            />
          </View>
          <Image
            source={{uri:shop.image}}
            style={{height: 120, width: '100%', borderRadius: 10}}
          />

          <Text style={style.cardName}>{shop.name}</Text>
          <View
            style={{
              marginTop: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={style.location}>{shop.location}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="star" color={COLORS.yellow} size={18} />
              <Text style={style.rating}>4.3</Text>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  const PopularItemCard = ({shop}) => {
    return (
      <View style={style.popularItemCard}>
        <View style={style.iconContainer}>
          <Icon
            name="heart"
            color={shop.liked ? COLORS.red : COLORS.primary}
          />
        </View>
        <Image
          source={{uri:shop.image}}
          style={{
            width: 100,
            height: '100%',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            marginRight: 10,
          }}
        />
        <View style={{paddingVertical: 15, justifyContent: 'center'}}>
          <Text style={style.cardName}>{shop.name}</Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={style.location}>{shop.location}</Text>
            <View style={{flexDirection: 'row', marginLeft: 10}}>
              <Icon name="star" color={COLORS.yellow} size={18} />
              <Text style={style.rating}>4.3</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.backGrey, flex: 1}}>
      {/* Header container */}
      <View style={style.header}>
        <Icon name="sort-variant" size={28} color={COLORS.primary} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={style.headerTitle}>Best Shops For Your Plants.</Text>

        {/* Input and sort button container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
          }}>
          <View style={style.searchInputContainer}>
            <Icon name="magnify" color={COLORS.grey} size={25} />
            <TextInput placeholder="Search" />
          </View>

          <View style={style.sortBtn}>
            <Icon name="tune" color={COLORS.white} size={25} />
          </View>
        </View>

        <Text style={style.title}>Categories</Text>
        {/* Render categories */}
        <ListCategories />

        {/* Render To Shops */}
        <Text style={style.title}>Top shop</Text>

        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 20}}
          data={shops}
          horizontal
          renderItem={({item}) => <Card shop={item} />}
        />

        {/* Render To Popular */}
        <Text style={style.title}>Popular</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 20}}
          data={shops}
          renderItem={({item}) => <PopularItemCard shop={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    width: '55%',
    lineHeight: 30,
    paddingHorizontal: 20,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  sortBtn: {
    backgroundColor: COLORS.primary,
    height: 50,
    width: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  categoryItemBtn: {
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 7,
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginLeft: 5,
  },
  card: {
    height: 190,
    backgroundColor: COLORS.white,
    elevation: 10,
    width: width / 2.5,
    marginRight: 20,
    padding: 10,
    marginVertical: 20,
    borderRadius: 10,
  },
  cardName: {
    marginTop: 10,
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  location: {fontWeight: 'bold', color: COLORS.primary, fontSize: 12},
  rating: {
    fontWeight: 'bold',
    color: COLORS.primary,
    fontSize: 12,
  },
  title: {fontSize: 18, fontWeight: 'bold', paddingHorizontal: 20},
  iconContainer: {
    height: 25,
    width: 25,
    backgroundColor: COLORS.white,
    position: 'absolute',
    elevation: 2,
    right: 15,
    top: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popularItemCard: {
    height: 90,
    width: width - 100,
    backgroundColor: COLORS.white,
    elevation: 10,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 10,
    flexDirection: 'row',
  },
});
export default ShopScreen;