import { NativeStackScreenProps } from "@react-navigation/native-stack";


export type RootStackParamList={
    HomeScreen:undefined
}

export type AuthenticationScreenProps = NativeStackScreenProps<
    RootStackParamList,
    'HomeScreen'
>;