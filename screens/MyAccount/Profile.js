import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import { Header} from 'react-native-elements';
import '@expo/vector-icons';


class Profile extends React.Component{

  static navigationOptions = ({navigation}) => ({
    header: null
  })
  
    render(){
      
        return(


            <View style={styles.header}>
       <Header
          leftComponent={{
            icon: 'menu',
            color: '#fff',
            onPress: () => {this.props.navigation.openDrawer()},
          }}
          
          rightComponent={{ 
            icon: 'person', 
            color: '#fff',
            onPress: () => this.props.navigation.navigate('My Account')}}
          centerComponent={{  style: { color: '#fff' } }}
          backgroundColor="#028A7E"
        />

            <View style={styles.container}>  
            
                    <Text>Profile Screen</Text>

            </View>

        </View> 
      
     
        )
    }
}
export default Profile;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        flex: 1,
        paddingTop: 4,
        backgroundColor: '#ecf0f1',
      }
})