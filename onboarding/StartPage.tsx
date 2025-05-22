import React from 'react';
import { View } from 'react-native';
import { Image } from '@/components/ui/image';
import { Input, InputField, InputSlot } from '@/components/ui/input';
import { LockOpen, LogIn, NotebookPen, User } from 'lucide-react-native';
import { useState } from 'react';
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { useEmailSignIn } from './hooks/index';
import { RegisterPage } from './RegisterPage';

const StartPage = () => {
  const icon = require('assets/adaptive-icon.png');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signInWithEmail } = useEmailSignIn();

  return (
    <View className="flex-1 justify-around items-center p-20 bg-[#F9F6EE] w-full">
      <Image source={icon} alt="Logo" size="2xl" />
      <View className="w-full justify-center items-center gap-10">
        <Input variant="outline" size="lg">
          <InputSlot className="pl-3">
            <User />
          </InputSlot>
          <InputField
            value={email}
            onChangeText={setEmail}
            type="text"
            placeholder="E-mail"
          />
        </Input>
        <Input variant="outline" size="lg">
          <InputSlot className="pl-3">
            <LockOpen />
          </InputSlot>
          <InputField
            value={password}
            onChangeText={setPassword}
            type="password"
            placeholder="Password"
          />
        </Input>
        <Button
          onPress={() => signInWithEmail(email, password)}
          size="lg"
          className="rounded-xl px-4 py-2 w-64"
        >
          <ButtonIcon as={LogIn} />
          <ButtonText>Login</ButtonText>
        </Button>
        <Button
          onPress={RegisterPage}
          size="lg"
          className="rounded-xl px-4 py-2 w-64"
        >
          <ButtonIcon as={NotebookPen} />
          <ButtonText>Register</ButtonText>
        </Button>
      </View>
    </View>
  );
};

export default StartPage;
