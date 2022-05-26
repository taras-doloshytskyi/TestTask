import React, {Component, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Images from '../theme';
import Share from 'react-native-share';
import LinearGradient from 'react-native-linear-gradient';
const CardList = () => {
  const [cardList, setCardList] = useState([
    {
      title: 'My first food style',
    },
    {
      title: 'Vegan  for me',
    },
    {
      title: 'Brunchi Munchi',
    },

    {
      title: 'Sunday super',
    },
  ]);
  const addItem = () => {
    setCardList(items => [...items, {title: 'New Item'}]);
  };
  const onShare = async () => {
    // try {
    //   const result = await Share.open({
    //     title: 'App link',
    //     message:
    //       'Please install this app and stay safe , AppLink :https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en',
    //     url: 'https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en',
    //   });
    //   if (result.action === Share.sharedAction) {
    //     if (result.activityType) {
    //       // shared with activity type of result.activityType
    //     } else {
    //       // shared
    //     }
    //   } else if (result.action === Share.dismissedAction) {
    //     // dismissed
    //   }
    // } catch (error) {
    //   alert(error.message);
    // }

    Share.open({
      title: 'Vegan for me',
      url: 'https://docs.google.com/document/d/1heCo8GTAJU8K94vOKNP9uhoVshl6oydq8fESMTRVN9k/edit#heading=h.wed0ct63v68t',
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };
  return (
    <LinearGradient
      style={styles.container}
      colors={['rgb(243,196,66)', 'rgb(250,119,69)']}>
      <SafeAreaView style={styles.containerWrapper}>
        <ScrollView style={{flex: 1, marginBottom: 50}}>
          {cardList.map(item => {
            return (
              <View style={styles.cardItem}>
                <Text>{item.title}</Text>
                <TouchableOpacity style={styles.imageOption} onPress={onShare}>
                  <Image source={Images.options} />
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
        <TouchableOpacity
          style={{position: 'absolute', bottom: 18}}
          onPress={addItem}>
          <View style={styles.newItem}>
            <Image source={Images.add} />
            <Text>New Food Style</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgb(250, 119, 69)',
    paddingHorizontal: 18,
    marginTop: 100,
  },
  cardItem: {
    display: 'flex',
    paddingLeft: 19,
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: 339,
    height: 52,
    borderRadius: 10,
    position: 'relative',
    marginBottom: 6,
  },
  imageOption: {
    position: 'absolute',
    top: 14,
    right: 19,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
  newItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: 339,
    height: 52,
    borderRadius: 10,

    marginBottom: 6,
    paddingLeft: 19,
  },
});

export default CardList;
