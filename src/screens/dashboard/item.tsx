import React from 'react'
import moment from 'moment'
import {hasObjectLength} from 'utils/condition'
import {AssetSvg, Text, View} from '@/components'
import {ListingView} from '@/components/common'

export default props => {
  const {item, onPress, index} = props
  if (!hasObjectLength(item)) return null
  const {id, title, is_read, created_at, text} = item
  const utcTime = moment.utc(created_at).local()
  const fromNow = moment(utcTime).fromNow()

  const DETAILS_VIEW = (
    <View class="flex-row justify-between self-center py-3% px-2%">
      <View class="width-12% justify-center">
        <AssetSvg width={30} height={30} name={AssetSvg.icons.bell_2} />
      </View>
      <View class="width-84% overflow-hidden justify-center">
        <Text
          class="100% text-gray-700 font-weight-500 size-sm mb-5"
          text={title}
        />
        <View flexRow class="justify-between">
          <Text class="width-90% font-weight-500 size-xs" text={text} />
          <View
            bind-class={is_read && 'bg-gray-500'}
            class="bg-primary width-8 height-8 rounded-100"
          />
        </View>
        <View class="items-end width-100%">
          <Text class="size-xs text-gray-700" text={fromNow} />
        </View>
      </View>
    </View>
  )

  return (
    <ListingView
      onSelect={() => onPress?.(item)}
      class="mb-15 width-90% self-center"
      key={id}
      index={index}>
      {DETAILS_VIEW}
    </ListingView>
  )
}
