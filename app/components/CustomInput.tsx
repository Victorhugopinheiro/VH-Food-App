import { CustomInputProps } from '@/type'
import cn from 'clsx'
import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

const CustomInput = ({label, keyboardType, onChangeText, placeholder, secureTextEntry, value}:CustomInputProps) => {

    const [isFocused, setIsFocused] = useState(false)
    
  return (
    <View className=''>
      <Text className='label'>{label}</Text>

      <TextInput
    autoCapitalize='none'
    autoCorrect={false}
    value={value}
    onChangeText={onChangeText}
    secureTextEntry={secureTextEntry}
    keyboardType={keyboardType}
    onFocus={ () => setIsFocused(true)}
    onBlur={() => setIsFocused(false)}
    placeholder={placeholder}
    placeholderTextColor={'#888'}
    className={cn('input', isFocused ? 'border-primary' : 'border-gray-300')}
      />
    </View>
  )
}

export default CustomInput