import React from "react";
import {View,Text} from 'react-native'
const Navigationbar = (props) => {
    return(
        <View style={{backgroundColor:'#129ed5', width:'100%', height:'6%',justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:"#ffffff",fontSize:18,alignContent:'center', alignItems:'center',alignSelf:'center',fontWeight:'bold'}}>
          {props.name}
        </Text>
      </View>
    )
}




export default Navigationbar;