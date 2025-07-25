import { Link, router } from 'expo-router'
import React, { useState } from 'react'
import { Alert, Text, View } from 'react-native'
import CustomButtom from '../components/CustomButtom'
import CustomInput from '../components/CustomInput'

const SignUp = () => {

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', password: '' })

  const submit = async () => {
    if (!form.name || !form.email || !form.password) {
      Alert.alert('Erro', 'Por favor, preencha email e senha.');
      return;
    }

    setIsSubmitting(true)

    try {
      Alert.alert('Success', 'Cadastrado com Sucesso!');
      router.replace('/sign-in')
      setIsSubmitting(false)
    } catch {
      Alert.alert('Erro', 'Erro de requisiçao.');
      setIsSubmitting(false)
    }
  }

  return (
    <View className='p-4 flex flex-col gap-6'>

      <CustomInput label='Nome'

        keyboardType='default'
        onChangeText={(text) => setForm((prev) => ({ ...prev, name: text }))}
        placeholder='Digite seu Nome'
        secureTextEntry={false}
        value={form.name}
      />

      <CustomInput label='Email'

        keyboardType='email-address'
        onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
        placeholder='Digite seu email'
        secureTextEntry={false}
        value={form.email}
      />

      <CustomInput label='Senha'

        keyboardType='numeric'
        onChangeText={(text) => setForm((prev) => ({ ...prev, password: text }))}
        placeholder='Digite Sua senha'
        secureTextEntry={true}
        value={form.password}
      />
      <CustomButtom isLoading={isSubmitting} leftIcon={''} onPress={submit} style='' textStyle='' title='Cadastrar' />




      <View className='flex flex-row w-full p-2 justify-center gap-1 mt-2'>
        <Text className='text-sm '>Já tem uma conta?</Text>
        <Link className='text-sm font-semibold text-primary' href={'/sign-in'}>Entrar</Link>
      </View>
    </View>
  )
}

export default SignUp