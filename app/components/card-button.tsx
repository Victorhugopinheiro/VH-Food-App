import { images } from '@/constants'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const CardButton = () => {

    const itemsAmount = 10
  return (
    <TouchableOpacity className='cart-btn'>
        <Image source={images.bag} className='size-5' resizeMode='contain'/>

        {itemsAmount > 0 && (
            <View className='cart-badge'>
                <Text className='small-bold'>{itemsAmount}</Text>
            </View>
        )}

    </TouchableOpacity>
  )
}

export default CardButton