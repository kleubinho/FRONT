import * as React from 'react'
import { TextInput, View } from 'react-native';
import { styles } from '../css/Style';

let name = "";
let email = "";
let cpf =  "";
let user = "";
let password = "";

export default function Cadastro(){

    // Vamos criar o estado inicial das caixas
    // do formulário
    const[nameDocente, setNameDocente] = React.useState("");
    const[emailDocente, setEmailDocente] = React.useState("");
    const[cpfDocente, setCpfDocente] = React.useState("");
    const[userDocente, setUserDocente] = React.useState("");
    const[passwordDocente, setPasswordDocente] = React.useState("")

    return(
        <View style={styles.container}>
            <Text style={styles.titulo} >Cadastro Docente</Text>
            <View style={styles.controles}>
                <TextInput
                    placeholder="Nome do Docente"
                    style={styles.input}
                    value={nameDocente}
                    onChangeText={(value) => setNameDocente(value)}
                    />
                <TextInput
                    placeholder="E-mail"
                    style={styles.input}
                    value={emailDocente}
                    onChangeText={(value) => setEmailDocente(value)}
                    />
                <TextInput
                    placeholder="CPF"
                    style={styles.input}
                    value={cpfDocente}
                    onChangeText={(value) => setCpfDocente(value)}
                    />
                <TextInput
                    placeholder="Usuãrio"
                    style={styles.input}
                    value={userDocente}
                    onChangeText={(value) => setUserDocente(value)}
                    />
                <TextInput
                    placeholder="Nome do Docente"
                    style={styles.input}
                    value={passwordDocente}
                    onChangeText={(value) => setPasswordDocente(value)}
                    />
            </View>
        </View>
    )
}