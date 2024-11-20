export interface CustomButtonProps {
  text: string;
    onPress: () => void;
    style?: string;
}


export interface CustomInputProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
}