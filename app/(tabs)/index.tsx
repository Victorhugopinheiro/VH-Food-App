import { images, offers } from '@/constants';
import cn from 'clsx';
import { Fragment } from "react";
import { FlatList, Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CardButton from '../components/card-button';

export default function Index() {
  return (
    <SafeAreaView className='flex-1 bg-white'>




      <FlatList
        data={offers}
        ListHeaderComponent={() => (
          <View className='flex-between w-full my-5  flex-row'>

            <View >
              <Text className=' small-bold font-quicksand-bold text-primary'>
                DELIVER TOoo
              </Text>

              <TouchableOpacity className='flex-row flex-center gap-x-1 mt-0.5'>
                <Text className='paragraph-bold'>Croatia</Text>
                <Image source={images.arrowDown} className='size-4' resizeMode='contain' />
              </TouchableOpacity>
            </View>

            <CardButton/>

          </View>
        )}
        contentContainerClassName='pb-28 px-5'
        renderItem={({ item, index }) => {
          const isEven = index % 2 === 0;

          return (
            <View className=''>
              <Pressable
                className={cn('offer-card', isEven ? 'flex-row-reverse' : 'flex-row')}
                style={{ backgroundColor: item.color }}
                android_ripple={{ color: '#fffff22' }}
              >
                {({ pressed }) => (
                  <Fragment>
                    <View className="h-full w-1/2">
                      <Image source={item.image} className="size-full" resizeMode="contain" />
                    </View>

                    <View className={cn('offer-card__info', isEven ? 'pl-10' : 'pr-10')}>
                      <Text className="h1-bold text-red-100 leading-tight ">
                        {item.title}
                      </Text>

                      <Image source={images.arrowRight} resizeMode='contain' className='size-8' />
                    </View>
                  </Fragment>
                )}
              </Pressable>
            </View>
          );
        }} />
    </SafeAreaView>
  );
}
