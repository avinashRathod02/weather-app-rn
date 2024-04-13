import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {ImageBackground, View} from 'react-native'
import images from '@/assets/images'
import {Button, Text} from '@/components'
import styles from './styles'
import {routes} from '@/navigation'

export default props => {
  const onPress = () => props.navigation.navigate(routes.MAIN_DASHBOARD)
  return (
    <View style={{flex: 1}}>
      <ImageBackground style={{flex: 1}} source={images.welcome_bg}>
        <SafeAreaView
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.container}>
            <Text style={styles.title} tx="header.welcome" />
            <Button onPress={onPress} tx="button.continue" />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  )
}
