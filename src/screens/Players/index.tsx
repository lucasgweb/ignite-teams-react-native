import { Header } from '@components/Header';
import { Container, Form, HeaderList, NumbersOfPlayers } from './styled';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter'
import { FlatList } from "react-native";
import { useState } from 'react';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

export const Players = () => {
    const [team, setTeam] = useState('Time A')
    const [players, setPlayers] = useState(['Lucas', 'Vini', 'Bruno', 'Gabriel', 'Ricardo', 'Ana', 'Claudio', 'José']);
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
                        <Filter title={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)} />
                    )}
                    horizontal
                />
                <NumbersOfPlayers>
                    {players.length}
                </NumbersOfPlayers>
            </HeaderList>

            <FlatList data={players}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <PlayerCard
                        name={item}
                        onRemove={() => { }}
                    />
                )}
                ListEmptyComponent={() => (
                    <ListEmpty message='Não há pessoas nesse time.' />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    { paddingBottom: 100 },
                    players.length === 0 && { flex: 1 }
                ]}
            />

            <Button title='Remover Turma' type='DELETE'/>
        </Container>
    )
}