import { Header } from '@components/Header';
import { Container, Form, HeaderList, NumbersOfPlayers } from './styled';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter'
import { FlatList } from "react-native";
import { useState } from 'react';

export const Players = () => {
    const [team, setTeam] = useState('Time A')
    const [players, setPlayers] = useState([]);
    return (
        <Container>
            <Header showBackButton />
            <Highlight title='Nome da turma' subtitle='Adicione a galera e separe os times' />
            <Form>
                <Input placeholder='Nome da pessoa' autoCorrect={false} />
                <ButtonIcon icon='add' />
            </Form>
            <HeaderList>
                <FlatList
                    data={['Time A', 'Time B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter title={item} isActive={item === team} onPress={() => setTeam(item)} />
                    )}
                    horizontal
                />
                <NumbersOfPlayers>
                    {players.length}
                </NumbersOfPlayers>
            </HeaderList>


        </Container>
    )
}