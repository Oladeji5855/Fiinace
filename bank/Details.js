import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
import { ChevronDoubleLeftIcon, EyeIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { EllipsisHorizontalIcon, UserIcon } from 'react-native-heroicons/outline'

const Details = () => {
    const Navi = useNavigation()
  return (
    <ImageBackground style = {{flex: 1,}} source={require('../assets/marius.jpeg.jpg')}>
        <View style = {{paddingTop: 60, paddingLeft: 25}}>
           <ChevronDoubleLeftIcon color={'white'} size={30} onPress={() => Navi.goBack() }/>
              <Text style ={{color: 'white', paddingTop:15, fontSize:28, fontWeight: '800'}}>Login</Text>
          <View style = {{paddingTop: 20, justifyContent: 'center', alignItems: 'center'}}>
          <View style = {{height: 50, width: 50, borderRadius: 30, backgroundColor: '#6936A7'}}>
               <View style = {{paddingTop:7, paddingLeft:27}}>
               <View style = {{height:15, width:15, borderRadius: 10, backgroundColor: 'white'}}/>
               </View>
            </View>
          </View>
        
        </View>

        <View style = {{marginTop: 90, flexDirection: 'row', justifyContent: 'space-between', paddingLeft:25, paddingRight:25}}>
            <TouchableOpacity style = {{height: 55, width: 150, backgroundColor: '#6936A7', borderRadius: 30, alignItems: 'center', justifyContent: 'center'}}>
                <Text style = {{color: 'white', textAlign: 'center', fontSize: 20}}>Personal</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {{height: 55, width: 150, backgroundColor: 'gray', borderRadius: 30, alignItems: 'center', justifyContent: 'center'}}>
                <Text style = {{color: 'white', textAlign: 'center', fontSize: 20}}>Business</Text>
            </TouchableOpacity>
        </View>

        <View style = {{alignSelf: 'center', paddingTop: 10}}>
            <View style = {{height: 370, width: 330, backgroundColor: 'white', borderRadius: 30}}>
                <View style = {{flexDirection: 'row', paddingTop:30, justifyContent: 'center'}}>
                    <View style = {{height: 40, width: 40, borderWidth: 1, borderColor: 'gray', borderRadius: 30, justifyContent:'center', alignItems:'center'}}>
                        <UserIcon color={'gray'} size={24}/>
                    </View>
                  <TextInput style = {{height: 20, width: 230, color: 'black', alignSelf: 'center', paddingLeft: 20, fontWeight: '600'}} placeholder='Email'/>
                </View>
             <View style = {{paddingTop: 15, alignItems: 'center'}}>
             <View style = {{width: 280, borderWidth:0.25, borderColor: 'gray'}}/>
             </View>

             <View style = {{flexDirection: 'row', paddingTop:40, justifyContent: 'center', alignItems: 'center'}}>
                    <View style = {{height: 40, width: 40, borderWidth: 1, borderColor: 'gray', borderRadius: 30, justifyContent:'center', alignItems:'center'}}>
                        <EllipsisHorizontalIcon color={'gray'} size={24}/>
                    </View>
                     <TextInput style = {{height: 20, width: 230, color: 'black', alignSelf: 'center', paddingLeft: 20, fontWeight: '600'}} placeholder='Password'/>
                  <TouchableOpacity>
                    <EyeIcon color={'black'} size={15}/>
                  </TouchableOpacity>
                </View>
             <View style = {{paddingTop: 15, alignItems: 'center'}}>
             <View style = {{width: 280, borderWidth:0.25, borderColor: 'gray'}}/>
             </View>

             <View style = {{flexDirection: 'row', paddingTop: 40, paddingLeft: 20, alignItems: 'center'}}>
                <View style = {{height: 15, width: 15, borderRadius: 30, backgroundColor: '#6936A7'}}/>
                <TouchableOpacity style = {{paddingLeft: 5}}>
                  <Text style = {{color: 'black', fontSize: 16, fontWeight: '700'}}>Forgot password?</Text>
                </TouchableOpacity>
             </View>

             <View style = {{paddingTop: 30, alignItems: 'center'}}>
             <TouchableOpacity onPress={() => Navi.navigate('Home')} style = {{height: 60, width: 280, backgroundColor: 'black', borderRadius: 30, alignItems: 'center', justifyContent: 'center'}}>
                <Text style = {{color: 'white', fontSize: 20, fontWeight: '600', textAlign: 'center'}}>Log In</Text>
             </TouchableOpacity>
             </View>


            </View>

        </View>

    </ImageBackground>
  )
}

export default Details