import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: '#000', flex: 1 }}>
      <Image
        style={{ height: 370, width: '100%', resizeMode: 'contain' }}
        source={{
          uri: 'https://img.freepik.com/premium-vector/quiz-time-neon-signs-style-text_118419-1527.jpg',
          alt: 'Quiz Time',
        }}
      />

      <View style={{ padding: 10 }}>
        <Text
          style={{
            marginTop: 15,
            textAlign: 'center',
            color: 'cyan',
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          RULES
        </Text>
        <View
          style={{
            padding: 10,
            backgroundColor: '#151515',
            borderRadius: 6,
            marginTop: 15,
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: 'white', fontSize: 18 }}>-</Text>
            <Text style={{ marginLeft: 10, fontSize: 16, color: '#F3F781' }}>
              For each correct answer you get 5 points ✌
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 5,
            }}
          >
            <Text style={{ color: 'white', fontSize: 18 }}>-</Text>
            <Text style={{ marginLeft: 10, fontSize: 16, color: '#F3F781' }}>
              Each question has a time limit of 15 seconds.
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 5,
            }}
          >
            <Text style={{ color: 'white', fontSize: 18 }}>-</Text>
            <Text style={{ marginLeft: 10, fontSize: 16, color: '#F3F781' }}>
              There's no negative score for wrong answers.
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 5,
            }}
          >
            <Text style={{ color: 'white', fontSize: 18 }}>-</Text>
            <Text style={{ marginLeft: 10, fontSize: 16, color: '#F3F781' }}>
              Unanswered questions will be skipped and scored zero.
            </Text>
          </View>
        </View>
      </View>

      <Pressable
        onPress={() => navigation.navigate('Quiz')}
        style={{
          backgroundColor: '#DF01D7',
          padding: 10,
          marginLeft: 'auto',
          marginRight: 'auto',
          borderRadius: 7,
          marginTop: 80,
        }}
      >
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
          Start Quiz
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
