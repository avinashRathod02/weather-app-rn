import React from 'react'
import {
  StyleSheet,
  TextProps,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native'
import t from '@/locales/use-translation'
import colors from '@/colors'
import {Namespace, TFuncKey} from 'react-i18next'
import {Text} from '../text'

interface IProps extends TouchableOpacityProps {
  tx?: TFuncKey<Namespace>
  textProps?: TextProps
  txOptions?: any
  title?: string
  show?: boolean
  textStyle?: TextStyle
}

export default (props: IProps) => {
  const {
    show = true,
    tx,
    style,
    textStyle,
    textProps,
    title,
    children,
    txOptions
  } = props
  if (!show) {
    return <React.Fragment />
  }

  const styles = [stylesBase.base, style]
  const i18nText = tx && t(tx, txOptions)
  const content = i18nText || title || children

  return (
    <TouchableOpacity {...props} style={styles}>
      <Text
        allowFontScaling={false}
        style={[stylesBase.text, textStyle]}
        {...textProps}>
        {content}
      </Text>
    </TouchableOpacity>
  )
}

const stylesBase = StyleSheet.create({
  base: {
    width: '90%',
    marginVertical: 15,
    alignSelf: 'center',
    paddingVertical: 15,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  text: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 20
  }
})
