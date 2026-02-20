import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Episodio() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Episódio 1</Text>

      <View style={styles.card}>
        <Text style={styles.text}>
          No primeiro episódio, conhecemos Naruto Uzumaki,
          um jovem ninja travesso que deseja ser reconhecido.
          Ele acaba roubando um pergaminho proibido para provar
          seu valor, mas descobre que foi manipulado.

          Durante o conflito, Naruto demonstra coragem
          e determinação, sendo reconhecido por seu professor.
          Esse momento marca o início de sua jornada
          para se tornar Hokage.
        </Text>
      </View>

      <Link href="/" style={styles.button}>
        Voltar para Início
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
    justifyContent: 'center',
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
    marginBottom: 20,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    textAlign: 'justify',
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#ff6f00',
    padding: 12,
    borderRadius: 8,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});