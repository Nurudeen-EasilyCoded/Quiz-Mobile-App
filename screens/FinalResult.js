import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  FlatList,
} from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const FinalResult = () => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: 'gray', flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: 10,
          marginTop: 20,
        }}
      >
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
          Your Results
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 14,
          }}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
            Share
          </Text>
          <AntDesign
            name='sharealt'
            size={24}
            color='#01DF01'
            style={{ marginLeft: 4 }}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 20,
          margin: 10,
        }}
      >
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
          Questions Answered
        </Text>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
          (5/5)
        </Text>
      </View>

      <Pressable
        style={{
          backgroundColor: 'white',
          height: 200,
          borderRadius: 7,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: '#0000FF',
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center',
            margin: 10,
          }}
        >
          Score Card
        </Text>
        <FlatList
          data={route.params.answers}
          numColumns={2}
          renderItem={({ item, index }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                margin: 10,
                flexDirection: 'row',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <Text>{item.question}</Text>
              <AntDesign
                name={item.answer === true ? 'checkcircle' : 'closecircle'}
                size={20}
                color={item.answer === true ? 'green' : 'red'}
                style={{ marginLeft: 5 }}
              />
            </View>
          )}
        />
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('Home')}
        style={{
          backgroundColor: '#DF01D7',
          padding: 10,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 100,
          borderRadius: 6,
        }}
      >
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
          Retake Quiz
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default FinalResult;

const styles = StyleSheet.create({});
