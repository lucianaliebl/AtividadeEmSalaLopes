import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style= {styles.linha}>
        
        <View style={styles.box1}>
          <Imag 
            source={require("./assets/gato1.png")}
            style={styles.imagem}
            resizeMode='contain'
          />

          <Text style={{textAlign: 'center'}}>O que eu to fazendo da minha vida?</Text>    
        </View>

        <View style={styles.box2}>
          <Imag
            source={require("./assets/gato2.png")}
            style={styles.imagem}
            resizeMode='contain'
          />       
          <Text style={{textAlign: 'center'}}>ALGUÉM ME DÁ DOCEEEEEEE!</Text>    

        </View>
      
      </View>
      
      <View style= {styles.linha}>

        <View style={styles.box3}>
            <Imag 
              source={require("./assets/gato4.png")}
              style={styles.imagem}
              resizeMode='contain'
            />       
            <Text>ReactNative? </Text>    
        </View>

        <View style={styles.box4}>
            <Imag 
              source={{ 
                uri: 'https://media.tenor.com/CeFAp9e3xuUAAAAj/lindo-gato-feliz.gif' }}
              style={styles.imagem}
              resizeMode='contain'
            />       
            <Text>Sdds SwiftUI 😍</Text>     
        </View>
        
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A53860',
    justifyContent: 'center',
  },
  linha: {
    flexDirection: 'row',
    width: '100%',
    height: '50%',
  },
  box1: {
    flex: 1,
    backgroundColor: '#F9C91B',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    padding: 15, 
  },
  box2: {
    flex: 1,
    backgroundColor: '#FFADAD',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    padding: 15, 
  },
  box3: {
    flex: 1,
    backgroundColor: '#DAB6FC',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    padding: 15, 
  },
  box4: {
    flex: 1,
    backgroundColor: '#51B7AB',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    padding: 15, 
  },
  imagem: {
    width: 200,
    height: 200,
    padding: 15,
  }
});
