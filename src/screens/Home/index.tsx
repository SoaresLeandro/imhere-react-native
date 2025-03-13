import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home(){    
    const [participants, setParticipant] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');

    function handleParticipantAdd()
    {
        if(participants.includes(participantName)){
            return Alert.alert("Participante Existe", `O participante ${participantName} já está cadastrado`);
        }

        setParticipant(prevState => [...prevState, participantName]);
        setParticipantName('');
    }

    function handleParticipantRemove(name: string)
    {
        Alert.alert("Remover Participante", `Tem certeza que deseja remover o participanete ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setParticipant(prevState => prevState.filter(participant => participant != name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]);
    }

    return (
    <View style={styles.container}>        
        <Text style={styles.eventName}>Nome do evento</Text>

        <View style={styles.form}>
            <TextInput 
                style={styles.input} 
                placeholder='Nome do participante'
                placeholderTextColor='#6b6b6b'
                onChangeText={setParticipantName}
                value={participantName}
            />

            <TouchableOpacity style={styles.button} onPress={() => handleParticipantAdd()}>
            <Text style={styles.buttonText}>
                +
            </Text>
            </TouchableOpacity>
        </View>

        <FlatList
            data={participants}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <Participant 
                key={item} 
                name={item} 
                onRemove={() => handleParticipantRemove(item)}
            />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
                <Text style={styles.listEmpty}>
                    Ninguem chegou ao evento ainda? Adicione participantes à lista de presença.
                </Text>
            )}
         />

        {/* <ScrollView showsVerticalScrollIndicator={false}>
        {
            participants.map(p => (
                <Participant 
                    key={p} 
                    name={p} 
                    onRemove={() => handleParticipantRemove(p)}
                />
            ))
        }
        </ScrollView> */}
    </View>
    )
}