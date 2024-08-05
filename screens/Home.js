import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
  ActivityIndicator,
  Image,
  Switch
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import storeddata from "./GK.gkmodals.json"
const Home = () => {
  const [gkquestionstypelist, setgkquestiontypelist] = useState([]);
  const [loadng, setLoading] = useState(false);
  const [contnttype,setcontenttype]=useState("hindi");
  const showToast = () => {
    ToastAndroid.show('Please Switch On The For Loading', ToastAndroid.LONG);
  };
  const showToast2 = () => {
    ToastAndroid.show('Wait For Sometime Loading....', ToastAndroid.LONG);
  };

  const array = [ "india-gk","world-gk","gk-questions","gk-quiz","biology-gk","science-gk","physics-gk","chemistry-gk","general-awareness","computer-gk","political-gk","economics-gk","history-gk","sports-gk","geography-gk","teaching-aptitude-in-hindi","khan-sir-gk","ssc-gk-in-hindi","rail-gk","upsc-gk-in-hindi","indian-army-gk-in-hindi","reasoning-in-hindi","up-gk-in-hindi","rajasthan-gk-in-hindi","chhattisgarh-gk-in-hindi","ramayan-gk","current-affairs-2019-in-hindi"];
  const englisharraycurrent = ["current-affairs-quiz-april-2023","current-affairs-quiz-may-2023","current-affairs-quiz-june-2023","current-affairs-quiz-july-2023","current-affairs-quiz-august-2023","current-affairs-quiz-september-2023","business-economy-banking-current-affairs"]

  const navigation = useNavigation();

  const navigatetionfuncito = type => {
    if(englisharraycurrent.includes(type)){
      navigation.navigate('English', {type: type});

    }
    else{
      navigation.navigate('Questions', {type: type});

    }
  };
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={{flex: 1, backgroundColor: '#e5f6c1'}}>
      <View
        style={{
          height: 60,
          backgroundColor: 'rgba(255,255,255,.8)',
          borderBottomLeftRadius: 100,
          borderBottomRightRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{color: 'rgba(0,0,0,.9)', fontSize: 18, fontWeight: 'bold'}}>
          WELCOME TO THE GK WORLD
        </Text>
      </View>
<View style={{marginLeft:"auto",marginRight:"auto",flexDirection:"row",alignItems:"center"}}>
<Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={{marginTop:10}}
      />
{   !isEnabled?  
 <Text style={{fontSize:18,color:"black" ,fontWeight:"bold",marginRight:"auto",marginLeft:"auto",marginTop:10}}>HINDI</Text>:     
<Text style={{fontSize:18,color:"black" ,fontWeight:"bold",marginRight:"auto",marginLeft:"auto",marginTop:10}}>ENGLISH</Text>
}
</View>
   { !isEnabled?  <ScrollView style={{marginTop: 30, marginBottom: 30}}>
        {array.map((item, index) => (
            <TouchableOpacity
              onPress={() => navigatetionfuncito(item)}
              key={index}
              style={[style.buttons]}>
              <Text
                style={{
                  color: 'rgba(0,0,0,.9)',
                  fontWeight: 'normal',
                  fontSize: 16,
                  marginVertical: 5,
                }}>
                {item.toUpperCase()}
              </Text>
              <Image
                source={require('../images/brain.png')}
                style={{height: 30, width: 30,opacity:.8}}
              />
            </TouchableOpacity>
          ))
        }
      </ScrollView>:    <ScrollView >
      {englisharraycurrent.map((item, index) => (
            <TouchableOpacity
              onPress={() => navigatetionfuncito(item)}
              key={index}
              style={[style.buttons]}>
              <Text
                style={{
                  color: 'rgba(0,0,0,.9)',
                  fontWeight: 'normal',
                  fontSize: 15.5,
                  marginVertical: 5,
                }}>
                {item}
              </Text>
              {/* <Image
                source={require('../images/brain.png')}
                style={{height: 30, width: 30,opacity:.8}}
              /> */}
            </TouchableOpacity>
          ))
        }
      </ScrollView>}
  
    </View>
  );
};

const style = StyleSheet.create({
  buttons: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 15,
    paddingVertical: 7,
    backgroundColor: 'rgba(255,255,255,.4)',
    borderRadius: 10,
    paddingHorizontal: 15,
    borderWidth: 0.5,
    flexDirection: 'row',
    borderColor: 'rgba(0,0,0,.3)',
    justifyContent:"space-between"
  },
});

export default Home;
