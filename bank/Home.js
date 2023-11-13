import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native'
import React from 'react';
import { useNavigation} from '@react-navigation/native';
import { Bars3CenterLeftIcon, UserCircleIcon } from 'react-native-heroicons/outline';
import Next from './Next';

const  Home = () => {

  const Navigator = useNavigation()
const  DebitCard = [
    {
        id: '1',
        expiry: "02/28",
        number: "9876 5432 0198 7654 321",
        tag: "Card Holder",
        holder: "Eve Adams",
        Card: "Card Name",
        Image: require('../assets/master.jpg.webp')
    },

    {
        id: '2',
        expiry: "04/29",
        number: "0123 4567 8901 2345 678",
        tag: "Card Holder",
        holder: "Maria Adams", 
        Card: "Card Name",
        Image: require('../assets/master.jpg.webp')
    },
]

  return (
<SafeAreaView style = {{flex: 1}}>

  <View style = {{flex: 1, backgroundColor: 'black', alignContent: 'center', paddingTop: 20}}>
      
      <View style = {{flexDirection: 'row', padding: 10, justifyContent: 'space-between', alignItems: 'center'}}>
             <Bars3CenterLeftIcon color = {'white'} size = {45}/>
            <UserCircleIcon color = {'white'} size = {25}/>
      </View>

      <View style = {{flexDirection: 'column', alignItems: 'center', paddingTop: 10}}>
          <Text style = {{fontWeight: '700', fontSize: 10, color: 'white'}}> Total Balance</Text>
          <Text style = {{color: 'white', fontWeight: '900', fontSize: 20}}>$ 15 649 . 87</Text>
      </View>

     <FlatList

     data = {DebitCard}
      renderItem = {(Item) => {
        return<>
        <TouchableOpacity onPress = {() => Navigator.navigate('Next')}>
             <View style = {{height: 150, width: 280, borderRadius: 15, backgroundColor: '#6936A7', margin: 20}}>

                 <View style = {{alignSelf: 'flex-end', margin: 10, marginTop: 15}}>
                  <Text style = {{color: 'white', fontSize: 12, }}> {Item.item.expiry}</Text>
                  </View>

                  <View style = {{ margin: 5}}>
                  <Text style = {{color: 'white', fontSize: 16, }}> {Item.item.number}</Text>
                  </View>

             <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
   
                  <View style = {{flexDirection: 'column', margin: 5, paddingLeft: 5, paddingTop: 20}}>
                  <Text style = {{color: 'white', fontSize: 10}}>{Item.item.tag}</Text>
                  <Text style = {{color: 'white', fontSize: 14}}>{Item.item.holder}</Text>
                </View>

                <View style = {{flexDirection: 'column', margin: 5, alignItems: 'center', paddingRight: 10}}>
                  <Image source = {Item.item.Image} style = {{height: 40, width:40}}></Image>
                    <Text style = {{color: 'white', fontSize: 14}}>{Item.item.Card}</Text>
                 </View>
             </View>

             </View>
        </TouchableOpacity>
        </>
      }}
      keyExtactor = {(Item) => Item.id.tostring()}
      horizontal = {true}
     ></FlatList>

     <View style = {{justifyContent: 'center', alignItems: 'center'}}>
       <View style = {{height: 50, width:200, backgroundColor: '#5E37A2', borderRadius: 40, justifyContent: 'center'}}>
          <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 5}}>
              <TouchableOpacity  style = {{height: 40, width: 80, backgroundColor: 'black', borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
              <Text style = {{color: 'white', fontSize: 20}}>Debit</Text>
              </TouchableOpacity>

              <TouchableOpacity style = {{height: 40, width: 80, borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}> 
              <Text style = {{color: 'white', fontSize: 20}}>Credit</Text>
              </TouchableOpacity>
          </View>
       </View>
       </View>
     
      <View style = {{padding: 10, marginTop: 25}}>
        
        <View style = {{height: 320, width: 340, backgroundColor: '#161525', borderRadius: 10}}>
             <ScrollView>

                <View style = {{flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', padding: 10, paddingTop: 20}}>
 
                       <View style = {{flexDirection: 'row', justifyContent: 'flex-start'}}>
                              <View style = {{height: 35, width: 35, borderRadius: 10, backgroundColor: 'red', justifyContent: 'center'}}>
                              <Text style = {{textAlign: 'center', color: 'white', fontWeight: '700', fontSize: 20}}>W</Text>
                              </View>

                         <View style = {{flexDirection: 'column', paddingLeft: 10}}>
                             <Text style = {{color: 'white', fontSize: 14, fontWeight: '700'}}>Wifey Upkeep</Text>
                             <Text style = {{color: 'white'}}>Food stuff allowance</Text>
                         </View>

                        </View>
                   <Text style = {{color: 'red'}}> -$ 450</Text>
        
                </View>

                <View style = {{flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', padding: 10}}>

                        <View style = {{flexDirection: 'row', justifyContent: 'flex-start'}}>
                           <View style = {{height: 35, width: 35, borderRadius: 10, backgroundColor: 'blue', justifyContent: 'center'}}>
                              <Text style = {{textAlign: 'center', color: 'white', fontWeight: '700', fontSize: 20}}>G</Text>
                           </View>

                             <View style = {{flexDirection: 'column', paddingLeft: 10}}>
                               <Text style = {{color: 'white', fontSize: 14, fontWeight: '700'}}>Granny</Text>
                               <Text style = {{color: 'white'}}>monthly upkeep</Text>
                           </View>

                        </View>
                      <Text style = {{color: 'red'}}> -$ 250</Text>

                </View>
 
                <View style = {{flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', padding: 10}}>

                    <View style = {{flexDirection: 'row', justifyContent: 'flex-start'}}>
                         <View style = {{height: 35, width: 35, borderRadius: 10, backgroundColor: '#6637A5', justifyContent: 'center'}}>
                           <Text style = {{textAlign: 'center', color: 'white', fontWeight: '700', fontSize: 20}}>S</Text>
                          </View>

                          <View style = {{flexDirection: 'column', paddingLeft: 10}}>
                            <Text style = {{color: 'white', fontSize: 14, fontWeight: '700'}}>Subcription</Text>
                            <Text style = {{color: 'white'}}>monthly data subscription</Text>
                            </View>
                        </View>
                          <Text style = {{color: 'red'}}> -$ 200</Text>

                 </View>

                <View style = {{flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', padding: 10}}>
 
                              <View style = {{flexDirection: 'row', justifyContent: 'flex-start'}}>
                                  <View style = {{height: 35, width: 35, borderRadius: 10, backgroundColor: 'green', justifyContent: 'center'}}>
                                    <Text style = {{textAlign: 'center', color: 'white', fontWeight: '700', fontSize: 20}}>C</Text>
                                   </View>

                                  <View style = {{flexDirection: 'column', paddingLeft: 10}}>
                                     <Text style = {{color: 'white', fontSize: 14, fontWeight: '700'}}>Car Repair</Text>
                                     <Text style = {{color: 'white'}}>car maintenance</Text>
                                  </View>
                              </View>
                                   <Text style = {{color: 'red'}}> -$ 150</Text>
        
                 </View>

                <View style = {{flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', padding: 10}}>

                         <View style = {{flexDirection: 'row', justifyContent: 'flex-start'}}>
                                <View style = {{height: 35, width: 35, borderRadius: 10, backgroundColor: 'orange', justifyContent: 'center'}}>
                                   <Text style = {{textAlign: 'center', color: 'white', fontWeight: '700', fontSize: 20}}>P</Text>
                               </View>

                             <View style = {{flexDirection: 'column', paddingLeft: 10}}>
                                <Text style = {{color: 'white', fontSize: 14, fontWeight: '700'}}>Project</Text>
                                <Text style = {{color: 'white'}}>building project</Text>
                             </View>
                          </View>
                              <Text style = {{color: 'red'}}> -$ 600</Text>

                </View>
 
                <View style = {{flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', padding: 10}}>

                          <View style = {{flexDirection: 'row', justifyContent: 'flex-start'}}>
                             <View style = {{height: 35, width: 35, borderRadius: 10, backgroundColor: 'purple', justifyContent: 'center'}}>
                              <Text style = {{textAlign: 'center', color: 'white', fontWeight: '700', fontSize: 20}}>F</Text>
                              </View>

                              <View style = {{flexDirection: 'column', paddingLeft: 10}}>
                                  <Text style = {{color: 'white', fontSize: 14, fontWeight: '700'}}>Fees</Text>
                                  <Text style = {{color: 'white'}}>Son exam fees</Text>
                              </View>
                          </View>
                                    <Text style = {{color: 'red'}}> -$ 300</Text>
                 </View>

                <View style = {{flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', padding: 10}}>
 
                               <View style = {{flexDirection: 'row', justifyContent: 'flex-start'}}>
                                      <View style = {{height: 35, width: 35, borderRadius: 10, backgroundColor: 'violet', justifyContent: 'center'}}>
                                          <Text style = {{textAlign: 'center', color: 'white', fontWeight: '700', fontSize: 20}}>S</Text>
                                      </View>

                                      <View style = {{flexDirection: 'column', paddingLeft: 10}}>
                                            <Text style = {{color: 'white', fontSize: 14, fontWeight: '700'}}>School fees</Text>
                                           <Text style = {{color: 'white'}}>daughter's semester fee</Text>
                                      </View>
                               </View>
                                      <Text style = {{color: 'red'}}> -$ 750</Text>
                 </View>

                <View style = {{flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', padding: 10}}>

                             <View style = {{flexDirection: 'row', justifyContent: 'flex-start'}}>
                                 <View style = {{height: 35, width: 35, borderRadius: 10, backgroundColor: 'indigo', justifyContent: 'center'}}>
                                       <Text style = {{textAlign: 'center', color: 'white', fontWeight: '700', fontSize: 20}}>R</Text>
                                 </View>

                                  <View style = {{flexDirection: 'column', paddingLeft: 10}}>
                                        <Text style = {{color: 'white', fontSize: 14, fontWeight: '700'}}>Rent Dues</Text>
                                        <Text style = {{color: 'white'}}>monthly rent</Text>
                                  </View>
                             </View>
                                  <Text style = {{color: 'red'}}> -$ 1 250</Text>
                 </View>
 
                <View style = {{flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between', padding: 10}}>

                         <View style = {{flexDirection: 'row', justifyContent: 'flex-start'}}>
                               <View style = {{height: 35, width: 35, borderRadius: 10, backgroundColor: 'pink', justifyContent: 'center'}}>
                                    <Text style = {{textAlign: 'center', color: 'white', fontWeight: '700', fontSize: 20}}>I</Text>
                               </View>

                              <View style = {{flexDirection: 'column', paddingLeft: 10}}>
                                  <Text style = {{color: 'white', fontSize: 14, fontWeight: '700'}}>Investment</Text>
                                  <Text style = {{color: 'white'}}>Binance Investment</Text>
                              </View>
                          </View>
                                 <Text style = {{color: 'red'}}> -$ 4 000</Text>
                 </View>
         </ScrollView> 

          </View>
      </View>


    </View>
</SafeAreaView>
   
  )
}

export default Home