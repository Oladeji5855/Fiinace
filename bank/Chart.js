import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { ChevronDoubleLeftIcon, UserCircleIcon, } from 'react-native-heroicons/outline'
import {Cog8ToothIcon, ShoppingCartIcon, Squares2X2Icon, WalletIcon} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

const Chart = () => {
  const Navigation = useNavigation()
  return (

<ScrollView style = {{backgroundColor: 'black'}}>
<View style = {{flex: 1, backgroundColor: 'black', paddingTop: 40}}>

<View style = {{flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
    <ChevronDoubleLeftIcon color={'white'} onPress={() => Navigation.goBack()}/>
    <UserCircleIcon color={'white'}/>
</View>

<View style = {{flexDirection: 'column', paddingLeft: 15, marginBottom: 20}}>
  <Text style = {{color: 'white'}}>This Month</Text>
  <Text style = {{color: 'white', fontSize: 20, fontWeight: '800'}}>Spend Chart</Text>
</View>

<View style = {{flexDirection: 'row', alignItems:'baseline', alignSelf:'center',}}>

  <View style = {{flexDirection: 'column', paddingRight: 10, alignItems: 'center'}}>
    <View style = {{height: 80, width: 45, backgroundColor: '#7632A0', borderTopRightRadius: 7, borderTopLeftRadius:7}}/>
    <Text style = {{color: 'white', fontSize: 10}}>$400:00</Text>
  </View>

  <View style = {{flexDirection: 'column', paddingRight: 10, alignItems: 'center'}}>
    <View style = {{height: 100, width: 45, backgroundColor: '#6D32A6', borderTopRightRadius: 7, borderTopLeftRadius:7}}/>
    <Text style = {{color: 'white', fontSize: 10}}>$800:00</Text>
  </View>

  <View style = {{flexDirection: 'column', paddingRight: 10, alignItems: 'center'}}>
    <View style = {{height: 120, width: 45, backgroundColor: '#6033A3', borderTopRightRadius: 7, borderTopLeftRadius:7}}/>
    <Text style = {{color: 'white', fontSize: 10}}>$1200:00</Text>
  </View>

  <View style = {{flexDirection: 'column', paddingRight: 10, alignItems: 'center'}}>
    <View style = {{height: 140, width: 45, backgroundColor: '#5533AC', borderTopRightRadius: 7, borderTopLeftRadius:7}}/>
    <Text style = {{color: 'white', fontSize: 10}}>$2400:00</Text>
  </View>

  <View style = {{flexDirection: 'column', paddingRight: 10, alignItems: 'center'}}>
    <View style = {{height: 150, width: 45, backgroundColor: '#4C31A4', borderTopRightRadius: 7, borderTopLeftRadius:7}}/>
    <Text style = {{color: 'white', fontSize: 10}}>$3200:00</Text>
  </View>

</View>

    <Text style = {{color: 'white', fontSize: 16, fontWeight: '800', paddingLeft: 15, paddingTop: 25}}>Breakdown</Text>

    <View style = {{flexDirection: 'row', marginTop: 20, justifyContent: 'center'}}>

         <View style = {{flexDirection: 'column', alignItems: 'center', paddingRight: 10}}>
         <View style = {{height: 60, width: 60, borderRadius: 30, justifyContent:'center', borderColor: '#656465', borderWidth: 1, backgroundColor: '#141A27'}}>
          <Text style = {{color: '#990738', textAlign: 'center', fontSize: 16, fontWeight: '700'}}>45%</Text>
        </View>
        <Text style = {{color: 'white', paddingTop: 5}}>food & Snacks</Text> 
         </View>

        <View style = {{flexDirection: 'column', alignItems: 'center', paddingRight: 20}}>
        <View style = {{height: 60, width: 60, borderRadius: 30, justifyContent:'center', borderColor: '#656465', borderWidth: 1, backgroundColor: '#141A27'}}>
          <Text style = {{color: '#7C1938', textAlign: 'center', fontSize: 16, fontWeight: '700'}}>25%</Text>
        </View>
        <Text style = {{color: 'white', paddingTop: 5}}>Expenses</Text>
        </View>

        <View style = {{flexDirection: 'column', alignItems: 'center', paddingRight: 20}}>
        <View style = {{height: 60, width: 60, borderRadius: 30, justifyContent:'center', borderColor: '#656465', borderWidth: 1, backgroundColor: '#141A27'}}>
          <Text style = {{color: '#9E415B', textAlign: 'center', fontSize: 16, fontWeight: '700'}}>20%</Text>
        </View>
        <Text style = {{color: 'white', paddingTop: 5}}>Transport</Text>
        </View>

        <View style = {{flexDirection: 'column', alignItems: 'center', paddingRight: 20}}>
        <View style = {{height: 60, width: 60, borderRadius: 30, justifyContent:'center', borderColor: '#656465', borderWidth: 1, backgroundColor: '#141A27'}}>
          <Text style = {{color: '#93606F', textAlign: 'center', fontSize: 16, fontWeight: '700'}}>10%</Text>
        </View>
        <Text style = {{color: 'white', paddingTop: 5}}>Others</Text>
        </View>

    </View>

<View style = {{flex: 1, backgroundColor: '#161525', marginTop: 35, borderTopLeftRadius: 25, borderTopRightRadius: 25}}>

    

 <View style = {{flexDirection: 'row', marginTop: 15, alignItems: 'center', justifyContent: 'space-between', padding: 15}}>
  <Text style = {{color: 'white', fontSize: 16}}>Card Number:</Text>
  <View style = {{height: 25, width: 200, borderWidth: 1, borderRadius: 15, borderColor: 'white', backgroundColor: 'black'}}>
  <TextInput style = {{height: 23, width: 195, color: 'white', textAlign: 'center', alignSelf: 'center'}} placeholder ='4522 2548 3486 1549 4565' placeholderTextColor={'white'}></TextInput>
  </View>
 </View>

 <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15,}}>
  <Text style = {{color: 'white', fontSize: 16}}>Password:</Text>
  <View style = {{height: 25, width: 200, borderWidth: 1, borderRadius: 15, borderColor: 'white', backgroundColor: 'black'}}>
  <TextInput style = {{height: 23, width: 195, color: 'white', textAlign: 'center', alignSelf: 'center'}} placeholder ='************' placeholderTextColor={'white'}></TextInput>
  </View>
 </View>

 <View style = {{flexDirection: 'row', justifyContent: 'space-between', margin: 15}}>

    <View style = {{flexDirection: 'column'}}>
      <Text style = {{color: 'white'}}>Expiry Date: 02/28</Text>
      <Text style = {{color: 'white'}}>CVV: 741</Text>
    </View>

    <TouchableOpacity style = {{height: 30, width: 120, borderRadius: 20, backgroundColor: '#4C31A4', alignSelf: 'center', justifyContent: 'center'}}>
    <Text style = {{color: 'white', textAlign: 'center'}}>Delete Card</Text>
    </TouchableOpacity>

 </View>

  <View style = {{paddingTop: 15, alignItems: 'center'}}>

    <View style = {{height: 40, width: 250, borderWidth: 1, backgroundColor: 'black', borderRadius: 20, borderColor: '#656465',
          flexDirection: 'row', justifyContent: 'center'}}>

        <TouchableOpacity style = {{justifyContent: 'center', padding: 20}}>
          <WalletIcon color = {'white'}/>
        </TouchableOpacity>

        <TouchableOpacity style = {{justifyContent: 'center', padding: 20}}>
          <ShoppingCartIcon color = {'white'}/>
        </TouchableOpacity>

        <TouchableOpacity style = {{justifyContent: 'center', padding: 20}}>
          <Cog8ToothIcon color = {'white'}/>
        </TouchableOpacity>

        <TouchableOpacity style = {{justifyContent: 'center', padding: 20}}>
          <Squares2X2Icon color = {'white'}/>
        </TouchableOpacity>
    </View>

  </View>

</View>

</View>
</ScrollView>

  )
}

export default Chart