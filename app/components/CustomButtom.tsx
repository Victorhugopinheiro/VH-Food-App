import { CustomButtonProps } from '@/type'
import cn from 'clsx'
import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'

const CustomButtom = ({ isLoading, leftIcon, onPress, style, textStyle, title }: CustomButtonProps) => {
    return (
        <TouchableOpacity className={cn('custom-btn', style)} onPress={onPress}>
            {leftIcon}

            <View>
                {isLoading ? (
                    <ActivityIndicator size={'small'} />
                )
                    :
                    <Text className={cn('text-white-100 paragraph-semibold', textStyle)}>
                        {title}
                    </Text>

                }
            </View>
        </TouchableOpacity>
    )
}

export default CustomButtom