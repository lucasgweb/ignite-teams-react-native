import React from 'react'
import { Container, Logo, BackIcon, BackButton } from './styles';
import logoImg from '@assets/logo.png';
import { useNavigation } from '@react-navigation/native';

type HeaderProps = {
    showBackButton?: boolean
}

export const Header = ({ showBackButton = false }: HeaderProps) => {

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.navigate('groups');
    }
    return (
        <Container>
            {
                showBackButton &&
                <BackButton onPress={handleGoBack}>
                    <BackIcon />
                </BackButton>
            }
            <Logo source={logoImg} />
        </Container>
    )
}