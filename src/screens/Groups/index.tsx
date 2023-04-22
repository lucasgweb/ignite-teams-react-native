import React, { useState } from 'react'
import { Container } from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';


export const Groups = () => {
  const [groups, setGroups] = useState<Array<string>>([/* 'Galera da Rocket', 'Amigos', 'Familia', 'Galera da Rocket2', 'Amigos2', 'Familia2' */]);

  return (
    <Container>
      <Header />
      <Highlight title='Turmas' subtitle='Jogue com a sua turma' />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        renderItem={({ item }) => (
          <GroupCard title={item} />)}
        ListEmptyComponent={() => (
          <><ListEmpty message='Que tal cadastrar a primeira turma?' />
            <Button title='Criar nova turma' /></>
        )}
      />

    </Container>
  )
}