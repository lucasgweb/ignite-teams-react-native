import { Container } from './styles';
import { useTheme } from 'styled-components/native';

import { TextInputProps } from 'react-native';

type InputProps = TextInputProps & {

}

export const Input = ({ ...rest }: InputProps) => {
    const { COLORS } = useTheme();
    return (
        <Container
            placeholderTextColor={COLORS.GRAY_300}
            {...rest} />
    )
}