import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.superior}>
        <View style={styles.Icon}>
          <Image
            source={require("./assets/chapeu.png")}
            style={styles.logo}
            />
        </View>
      </View>

      <View style={styles.content}>

        <View style={styles.boasVindas}>
          <Text style={styles.title}>Bem-Vindo de volta</Text>
          <Text style={styles.sub}>Acesse sua conta do Senai</Text>
        </View>

        <View style={styles.formulario}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput style={styles.input} placeholder="exemplo@email.com"/>

          <Text style={styles.label}>Senha</Text>
          <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry />
        </View>

        <View style={styles.redefinirSenha}>
          <Text style={styles.txtRoxo}>Esqueci minha senha</Text>
        </View>

        <View style={styles.link}>
          <Pressable style={styles.btn}><Text style={styles.txtBtn}>Entrar</Text></Pressable>
        </View>

        <View style={styles.divisor}>
          <Text style={styles.txtCinza}>Ou entre com</Text>
        </View>

        <View style={styles.redes}>
          <Image source={require("./assets/github.png")} style={styles.socialIcon} />
          <Image source={require("./assets/google.png")} style={styles.socialIcon} />
          <Image source={require("./assets/instagram.png")} style={styles.socialIcon} />
        </View>

        <View style={styles.rodape}>
          <Text style={styles.txtCinza}>Não tem uma conta?</Text>
          <Text style={styles.txtRoxo}>Cadastre-se</Text>
        </View>

      </View>
      <StatusBar style='auto' />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  superior: {
    width: '100%',
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    fontSize: 25,
    fontWeight: '600',
  },

  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    justifyContent: 'center'
  },

  Icon: {
    width: 96,
    height: 96,
    borderRadius: 20,
    backgroundColor: "#fffcfc",
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#5a0ce2',
    shadowOffset: { width: 0, height: 8},
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 15,
  },

  content: {
    padding: 25,
    flex: 1,
  },

  formulario: {
    fontSize: 25,
    fontWeight: '600',
  },

  sub: {
    marginTop: 8,
    marginBottom: 15,
    fontSize: 15,
    color: '#808080',
    fontWeight: '600',
  },

  label: {
    fontWeight: '600',
  },

  input: {
    width: '96%',
    height: 45,
    marginVertical: 10,
    marginHorizontal: 5,
    borderWidth: 2,
    borderColor: '#f3efef',
    borderRadius: 10,
    paddingHorizontal: 20,
  },

  redefinirSenha: {
    alignItems: 'flex-end',
    marginHorizontal: 5,
    marginBottom: 6,
    },

    link: {
      marginVertical: 10,
    },

  txtRoxo: {
    color:  '#7529b8',
    fontWeight: '600',
  },
  
  btn: {
    backgroundColor: '#6721A5',
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },

  txtBtn: {
    color: '#fff',
    fontSize: '20',
    fontWeight: '600',
  },


  divisor: {
    marginVertical: 15,
    alignItems: 'center',
  },

  txtCinza: {
    color: '#808080',
    fontWeight: '600',
  },

  redes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    gap: 40,
  },

  socialIcon: {
    width: 60,
    height: 40,
    resizeMode: 'contain',
  },

  rodape: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 5,
  }
});
