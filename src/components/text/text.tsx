import React from 'react'
import {Text as RNText, StyleSheet} from 'react-native'
import t from '@/locales/use-translation'
import colors from '@/colors'

export default props => {
  const {show = true, tx, style, text, children, txOptions} = props
  if (!show) {
    return <React.Fragment />
  }

  const styles = [stylesBase.base, style]
  const i18nText = tx && t(tx, txOptions)
  const content = i18nText || text || children

  return (
    <RNText allowFontScaling={false} {...props} style={styles}>
      {content}
    </RNText>
  )
}

const stylesBase = StyleSheet.create({
  base: {
    textAlign: 'left',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: colors.gray9,
    includeFontPadding: true
  }
})
