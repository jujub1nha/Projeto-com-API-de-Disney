import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#EAF4FF',
    padding: 16,
  },

  pesquisa: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#2F80ED',
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    color: '#0B3D91',
  },

  linhaPesquisa: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  resultados: {
    fontSize: 15,
    color: '#164A7A',
    marginBottom: 10,
  },

  botao: {
    backgroundColor: '#2F80ED',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 12,
    marginBottom: 12,
    alignSelf: 'center',
    minWidth: 260,
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 0.3,
  },

  linhaOrdem: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,
  },

  botaoOrdem: {
    backgroundColor: '#2F80ED',
    paddingVertical: 9,
    paddingHorizontal: 22,
    borderRadius: 12,
    marginHorizontal: 5,
  },

  cardDetalhes: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    marginVertical: 16,
    alignItems: 'center',

    shadowColor: '#000000',
    shadowOpacity: 0.12,
    shadowRadius: 8,

    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 4,
  },

  tituloDetalhes: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0B3D91',
    marginBottom: 16,
    textAlign: 'center',
  },

  imagemDetalhes: {
    width: 250,
    height: 250,
    borderRadius: 125,
    marginBottom: 16,
    resizeMode: 'contain',
    backgroundColor: '#FFFFFF',
  },

  nomePersonagem: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0B3D91',
    marginBottom: 12,
    textAlign: 'center',
  },

  informacao: {
    fontSize: 16,
    color: '#164A7A',
    marginBottom: 6,
  },

  cardPersonagem: {
    width: '50%',
    alignItems: 'center',
    marginVertical: 12,
  },

  imagemPersonagem: {
    width: 120,
    height: 120,
    borderRadius: 60,
    resizeMode: 'contain',
    backgroundColor: '#FFFFFF',
  },

  listaPersonagens: {
    paddingBottom: 30,
  },

});