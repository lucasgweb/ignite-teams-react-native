import { TouchableOpacityProps } from 'react-native';
import { Container, ButtonIconTypeStyleProps, Icon } from './styles';
import { MaterialIcons } from '@expo/vector-icons';


type ButtonProps = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap;
    type?: ButtonIconTypeStyleProps
}
export const ButtonIcon = ({ type = 'PRIMARY', icon }: ButtonProps) => {
    return (
        <Container>
            <Icon name={icon} type={type} />
        </Container>
    )
}


