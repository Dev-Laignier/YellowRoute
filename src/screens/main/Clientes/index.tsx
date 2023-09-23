import React, { useState } from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Center, ScrollView } from "native-base";
import Input from "../../../components/Input";
import Button from  "../../../components/Button";
import { Texto } from "./styles";

type StackRoutes = {

}

const ClientRegistration = () => {
  
  const navigation: NavigationProp<StackRoutes> = useNavigation();

  const [isManualEntry, setIsManualEntry] = useState(false);
  const [cnpj, setCnpj] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleManualEntry = () => {
    setIsManualEntry(true);
  };

  const handleAutomaticEntry = async () => {
    if (cnpj) {
      try {
        // Simulando uma pesquisa de CNPJ fictícia
        const response = await fetch(`https://solucoes.receita.fazenda.gov.br/servicos/cnpjreva/cnpjreva_solicitacao.asp/${cnpj}`);
        const data = await response.json();
        console.log(data);

        if (data.status === "OK") {
          setName(data.nome);
          setEmail(data.email);
          setPhone(data.telefone);
        } else {
          Alert.alert("CNPJ não encontrado", "O CNPJ informado não foi encontrado.");
        }
      } catch (error) {
        console.error("Erro ao buscar CNPJ:", error);
        Alert.alert("Erro", "Ocorreu um erro ao buscar o CNPJ. Tente novamente mais tarde.");
      }
    } else {
      Alert.alert("CNPJ Inválido", "Por favor, insira um CNPJ válido.");
    }
  };

  const handleSave = () => {
    // Implemente a lógica de salvamento dos dados aqui
    // Dependendo da sua implementação, você pode usar AsyncStorage, uma API REST, etc.
    const clientData = {
      cnpj,
      name,
      email,
      phone,
    };

    // Salve os dados do cliente

    // Redirecione para a tela de sucesso ou outra tela apropriada
    //navigation.navigate("Home");
  };

  return (
    <ScrollView>
      <Center>
        
        <>
        {/* <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>Cadastro de Clientes</Text>
        <TouchableOpacity onPress={handleManualEntry}>
          <Text style={{ fontSize: 16, color: isManualEntry ? "black" : "blue" }}>Preenchimento Manual</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsManualEntry(false)}>
          <Text style={{ fontSize: 16, color: !isManualEntry ? "black" : "blue" }}>Preenchimento Automático (CNPJ)</Text>
        </TouchableOpacity>

        {isManualEntry ? (
          <View>
            <Input
              placeholder="Nome"
              value={name}
              onChangeText={(text) => setName(text)}
              //style={{ borderColor: "gray", borderWidth: 1, padding: 10, marginBottom: 10 }}
            />
            <Input
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              //style={{ borderColor: "gray", borderWidth: 1, padding: 10, marginBottom: 10 }}
            />
            <Input
              placeholder="Telefone"
              value={phone}
              onChangeText={(text) => setPhone(text)}
              //style={{ borderColor: "gray", borderWidth: 1, padding: 10, marginBottom: 10 }}
            />
          </View>
        ) : (
          <View>
            <Input
              placeholder="CNPJ"
              value={cnpj}
              onChangeText={(text) => setCnpj(text)}
              //style={{ borderColor: "gray", borderWidth: 1, padding: 10, marginBottom: 10 }}
            />
            <Button onPress={handleAutomaticEntry}>
              <Texto>Pesquisar CNPJ</Texto>
            </Button>
          </View>
        )}

        <Button onPress={handleSave} style={{ marginTop: 20 }}>
          <Texto>Salvar</Texto>
        </Button> */}
        </>
      </Center>
    </ScrollView>
  );
};

export default ClientRegistration;
