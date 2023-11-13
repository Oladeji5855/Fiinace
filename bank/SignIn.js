import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FingerPrintIcon } from 'react-native-heroicons/outline'
import { BuildingLibraryIcon, BuildingOfficeIcon, BuildingStorefrontIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import Details from './Details'

const SignIn = () => {
   const Navigate = useNavigation()
  return (
    <View style = {{flex: 1, backgroundColor: 'black', paddingTop: 100}}>
      <Text style = {{color: 'white', paddingLeft: 20, fontSize: 24, fontWeight: '800',}}>Good Morning</Text>
      <Text style = {{color:'white', paddingTop: 60, fontSize:16, fontWeight: '600', paddingLeft: 20}}>Welcome to</Text>
      <View style = {{flexDirection: 'row', paddingLeft: 20, paddingTop: 15}}>
      <Text style = {{color: 'white', fontSize: 24, fontWeight: '800'}}>People's</Text>
      <Text style = {{color: '#6936A7', fontSize: 24, fontWeight: 'bold'}}>Bank</Text>
      </View>
      <Text style = {{paddingTop: 30, color: 'white', fontSize: 16, paddingLeft: 20}}>Powered by Culminate</Text>

     
     <View style = {{paddingTop: 40, alignItems: 'center'}}>
     <TouchableOpacity style = {{height:50,  width: 200, borderColor: '#6936A7', borderWidth: 2, borderRadius: 30, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center'}}onPress={() => Navigate.navigate(Details)}>
          <Text style = {{color: 'white', fontSize: 16, textAlign: 'center'}}>Log In</Text>
      </TouchableOpacity>
     </View>

       <View style = {{paddingTop: 20, alignItems: 'center'}}>
       <TouchableOpacity style = {{height: 50, width: 200, borderColor: '#6936A7', borderWidth: 2, borderRadius: 30, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center'}}>
            <FingerPrintIcon color={'white'} size={30}/>
      </TouchableOpacity>
       </View>

       <View style = {{paddingTop: 40, alignItems: 'center'}}>
        <TouchableOpacity style = {{height: 50, width: 250, backgroundColor: '#6936A7', borderRadius: 30, alignItems: 'center', justifyContent: 'center'}}>
          <Text style = {{color: 'white', textAlign: 'center', fontSize: 16}}>Register</Text>
        </TouchableOpacity>
       </View>

       <View style = {{flexDirection: 'row', paddingTop: 30, justifyContent: 'center'}}>

        <View style = {{flexDirection: 'column', alignItems: 'center', paddingRight: 20}}>
          <TouchableOpacity style = {{height: 50, width: 50, backgroundColor: '#6936A7', borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
            <BuildingLibraryIcon color = {'white'} size={25}/>
          </TouchableOpacity>
          <Text style = {{color: 'white'}}>Branch</Text>
          <Text style = {{color: 'white'}}>Locator</Text>
        </View>

        <View style = {{flexDirection: 'column', alignItems: 'center'}}>
          <TouchableOpacity style = {{height: 50, width: 50, backgroundColor: '#6936A7', borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
            <BuildingOfficeIcon color = {'white'} size={25}/>
          </TouchableOpacity>
          <Text style = {{color: 'white'}}>ATM</Text>
          <Text style = {{color: 'white'}}>Locator</Text>
        </View>
        

       </View>


       <Text style = {{color: 'white', textAlign: 'center', paddingTop: 20}}>v2.1.0.25.6.5</Text>


  

    </View>
  )
}

export default SignIn