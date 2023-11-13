import { View, Text, FlatList, Image, ScrollView, TouchableOpacity, TextInput,} from 'react-native'
import React from 'react'
import { ChevronDoubleLeftIcon, FingerPrintIcon, UserCircleIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import Chart from './Chart'


const Next = () => {
  const Navigate = useNavigation()

  const DebitCard = [

    {
      id: '1',
      expiry: "02/28",
      number: "9876 5432 0198 7654 321",
      tag: "Card Holder",
      holder: "Eve Adams",
      Card: "Card Name",
      Image: require('../assets/master.jpg.webp'),
    },
  ]
  return (
  
    <View style = {{flex: 1, backgroundColor: 'black', paddingTop: 40}}>
      
    <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
      <ChevronDoubleLeftIcon color={'white'} size={25} onPress={() => Navigate.goBack()}/>
     <UserCircleIcon color={'white'} size={25} onPress = {() => Navigate.navigate ('Chart')} />
    </View>

     <View style = {{paddingTop: 20}}>
     <Text style = {{color: 'white', fontSize: 24, fontWeight: '900', textAlign: 'center'}}>Send Money</Text>
     <Text style = {{color: 'white', fontSize: 16, fontWeight: '200', paddingLeft: 30}}>Welcome Back,</Text>
     <Text style = {{color: 'white', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>Adams</Text>
     </View>

      <FlatList
         data={DebitCard}
          renderItem={(item) => {
            return<>
        <View style = {{padding: 15}}>
            <View style = {{height: 150, width: 280, borderRadius: 15, backgroundColor: '#6936A7', alignSelf: 'center'}}>

                <View style = {{alignSelf: 'flex-end', margin: 10, marginTop: 15}}>
                  <Text style = {{color: 'white', fontSize: 12}}>{item.item.expiry}</Text>
                </View>

                <View style = {{margin: 5}}>
                  <Text style = {{color: 'white', fontSize: 16}}>{item.item.number}</Text>
                </View>

              <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>

                  <View style = {{flexDirection: 'column', margin: 5, paddingLeft: 5, paddingTop:20}}>
                    <Text style = {{color: 'white', fontSize: 10}}>{item.item.tag}</Text>
                    <Text style = {{color: 'white', fontSize: 14}}>{item.item.holder}</Text>
                  </View>

                  <View style = {{flexDirection: 'column', margin: 5, alignItems: 'center', paddingRight: 10}}>
                    <Image source = {item.item.Image} style = {{height: 40, width: 40}}/>
                    <Text style = {{color: 'white', fontSize: 14}}>{item.item.Card}</Text>
                  </View>
              </View>

            </View>
         </View>
            </>
          }}
          keyExtractor={(item) => item.id}
          ></FlatList>

        <ScrollView >

            <View style = {{flexDirection: 'row', paddingLeft: 20, alignItems: 'center'}}>
                <Text style = {{color: 'white', paddingRight: 10, fontSize: 14, fontWeight: '800'}}>To:</Text>
                <View style = {{height: 1, width: 300, backgroundColor: 'gray'}}/>
            </View>

            <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style = {{fontSize: 12, color: 'white'}}>Select Bank:</Text>
             <View style = {{height: 25, width: 200, borderRadius: 15, borderColor: 'white', borderWidth: 1}}>
                <TextInput style = {{height: 20, width: 180, color: 'white', alignSelf: 'center'}} placeholder = 'Access bank' placeholderTextColor = {'gray'} />
             </View>
            </View>

            <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 20}}>
    <Text style = {{color: 'white', fontSize: 12, }}>Account Number:</Text>
    <View style = {{height: 25, width: 200, borderRadius: 15, borderColor: 'white', borderWidth:1}}>
              <TextInput style = {{height: 20, width: 180, color: 'white', alignSelf: 'center'}} placeholder='102*******' placeholderTextColor={'gray'}/>
     </View>
   </View>

   <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 20}}>
    <Text style = {{color: 'white', fontSize: 12, }}>Account Name:</Text>
      <View style = {{height: 25, width: 200, borderRadius: 15, borderColor: 'white', borderWidth:1, backgroundColor: 'gray'}}>
          <Text style = {{height: 20, width: 180, color: 'black', alignSelf: 'center'}}></Text>
      </View>
    </View>

   <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 20}}>
     <Text style = {{color: 'white', fontSize: 12, }}>Amount:</Text>
     <View style = {{height: 25, width: 200, borderRadius: 15, borderColor: 'white', borderWidth:1}}>
         <TextInput style = {{height: 20, width: 180, color: 'white', alignSelf: 'center'}} placeholder='*******' placeholderTextColor={'gray'}/>
     </View>
   </View>

   <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 20}}>
     <Text style = {{color: 'white', fontSize: 12, }}>Transaction Pin:</Text>
    <View style = {{height: 25, width: 200, borderRadius: 15, borderColor: 'white', borderWidth:1}}>
         <TextInput style = {{height: 20, width: 180, color: 'white', alignSelf: 'center'}} placeholder='*******' placeholderTextColor={'gray'}/>
   </View>
    </View>

<View style = {{flexDirection: 'row', alignItems: 'center', paddingTop: 20, justifyContent: 'center'}}>
<TouchableOpacity style = {{height: 40, width: 120, backgroundColor: '#6936A7',borderRadius: 20, alignItems: 'center', justifyContent: 'center'}}>
  <Text style = {{fontSize: 16, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Send Money</Text>
</TouchableOpacity>
<TouchableOpacity style = {{paddingLeft: 20}}>
<FingerPrintIcon color={'white'} size={30}/>
</TouchableOpacity>

</View>

<View style = {{margin: 30, justifyContent: 'center', alignItems: 'center'}}>
<View style = {{height: 60, width: 220, borderColor: '#6936A7', borderRadius: 30, borderWidth: 1,justifyContent: 'space-around', flexDirection: 'row'}}>
  <View style = {{flexDirection: 'column', paddingLeft: 10, justifyContent: 'center' }}>
      <Text style = {{color: 'gray', fontSize: 10}}>Available Balance</Text>
      <Text style = {{color: 'white', fontSize: 16, fontWeight: 'bold'}}>$ 15 649 . 87</Text>
  </View>

  <TouchableOpacity style = {{height: 40, width: 80, borderRadius: 20, borderColor: 'gray', backgroundColor: '#6936A7', justifyContent: 'center', alignSelf: 'center'}}>
      <Text style = {{fontSize: 14, fontWeight: 'bold', textAlign: 'center', color: 'white'}}>Add Fund</Text>
    </TouchableOpacity>

</View>


</View>

        </ScrollView> 

          
   </View>
  )
}
export default Next