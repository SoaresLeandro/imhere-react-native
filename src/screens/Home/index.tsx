import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home(){    
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

        <Participant name='Leandro Soares' onRemove={() => handleParticipantRemove('Leandro Soares')}/>
        <Participant name='Estevão'/>
        <Participant name='Vitor Roque'/>
        <Participant name='Facunto Torres'/>
    </View>
    )
}