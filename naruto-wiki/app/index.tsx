import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍥 Wiki Naruto</Text>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Sinopse</Text>
        <Text style={styles.text}>
          Naruto é um anime que conta a história de Naruto Uzumaki,
          um jovem ninja da Vila Oculta da Folha que sonha em se tornar Hokage,
          o ninja mais forte e respeitado da vila. 
          
          Rejeitado na infância por carregar dentro de si a Raposa de Nove Caudas,
          Naruto cresce enfrentando preconceito, solidão e desafios constantes.
          Ao longo da série, ele aprende o verdadeiro significado de amizade,
          superação e determinação.
        </Text>
      </View>

      <Link href="/personagens" style={styles.button}>
        Ver Personagens
      </Link>

      <Link href="/episodio" style={styles.button}>
        Ver Episódio 1
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
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    color: '#ff6f00',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
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
    marginTop: 10,
  },
});