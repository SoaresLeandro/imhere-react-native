import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home(){    
    const participants = ['Leandro', 'Estevão', 'Vitor Roque', 'Fagundo Torres', 'Raphael Veiga', 
        'Paulinho', 'Emiliano Martinez', 'Murilo', 'Micael', 'Weverton', 'Marcos Rocha', 'Piquerez', 'Richard Rios', 'Vanderlan', 'Mauricio'];

    function handleParticipantAdd()
    {
        console.log('Você clicou em adicionar')
    }

    function handleParticipantRemove(name: string)
    {
        console.log(`Você clicou em remover o Participante ${name}`)
    }

    return (
    <View style={styles.container}>        
        <Text style={styles.eventName}>Nome do evento</Text>

        <View style={styles.form}>
            <TextInput 
                style={styles.input} 
                placeholder='Nome do participante'
                placeholderTextColor='#6b6b6b'
            />

            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>
                +
            </Text>
            </TouchableOpacity>
        </View>

        <FlatList
            data={[]}
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