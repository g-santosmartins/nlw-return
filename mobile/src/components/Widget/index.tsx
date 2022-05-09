import React,{ useRef } from 'react';

import { View, TouchableOpacity, Text } from 'react-native';

import { ChatTeardropDots } from 'phosphor-react-native'

import BottomSheet from '@gorhom/bottom-sheet'

import { gestureHandlerRootHOC } from 'react-native-gesture-handler';


import { styles } from './styles';
import { theme } from '../../theme';
import { Options } from '../Options';

 function Widget() {

  // to open without use a state
  const bottomSheetRef = useRef<BottomSheet>(null)


  // to open func

  function handleOpen() {
    bottomSheetRef.current?.expand()
  }


  return (
    <>
      <TouchableOpacity
       style={styles.button}
       onPress={handleOpen}
       >

        <ChatTeardropDots 
          size={24}
          weight="bold"
          color={theme.colors.text_on_brand_color}
        />

        {/* <Text style={styles.text}>TouchableOpacity</Text> */}
      </TouchableOpacity>


      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        <Options/>
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget)