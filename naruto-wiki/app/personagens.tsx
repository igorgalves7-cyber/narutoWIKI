import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Personagens() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Personagens Principais</Text>

      <View style={styles.card}>
        <Text style={styles.name}>Naruto Uzumaki</Text>
        <Text style={styles.text}>
          Naruto é um ninja determinado e cheio de energia.
          Desde pequeno, enfrentou a rejeição da vila por abrigar
          a Raposa de Nove Caudas dentro de si.
          Seu maior sonho é se tornar Hokage e conquistar o respeito
          de todos através de seu esforço e perseverança.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.name}>Sasuke Uchiha</Text>
        <Text style={styles.text}>
          Sasuke é um dos membros do lendário clã Uchiha.
          Após o massacre de sua família, ele passa a viver
          buscando poder para se vingar de seu irmão.
          Frio e talentoso, é considerado um dos ninjas mais promissores
          de sua geração.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.name}>Sakura Haruno</Text>
        <Text style={styles.text}>
          Sakura é inteligente, dedicada e possui excelente controle
          de chakra. No início, demonstra insegurança,
          mas evolui ao longo da história, tornando-se uma ninja forte,
          madura e fundamental para sua equipe.
        </Text>
      </View>

      <Link href="/" style={styles.button}>
        Voltar para Início
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#ff6f00',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 15,
    textAlign: 'justify',
    lineHeight: 21,
  },
  button: {
    backgroundColor: '#ff6f00',
    padding: 12,
    borderRadius: 8,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    marginVertical: 15,
  },
});