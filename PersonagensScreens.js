import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import { buscarPersonagens } from '../services/disneyApi';
import PersonagemCard from '../components/PersonagemCard';
import { styles } from '../styles';

export default function PersonagensScreen() {
  const [carregando, setCarregando] = useState(true);
  const [personagens, setPersonagens] = useState([]);
  const [erro, setErro] = useState('');
  const [selecionado, setSelecionado] = useState(null);

  const [pesquisa, setPesquisa] = useState('');
  const [somenteJogos, setSomenteJogos] = useState(false);
  const [ordem, setOrdem] = useState('az');

  const personagensFiltrados = personagens
    .filter((personagem) => {
      const correspondePesquisa = personagem.name
        .toLowerCase()
        .includes(pesquisa.toLowerCase());

      const correspondeJogos =
        !somenteJogos || personagem.videoGames.length > 0;

      return correspondePesquisa && correspondeJogos;
    })
    .sort((a, b) => {
      const resultado = a.name.localeCompare(b.name);

      return ordem === 'az' ? resultado : -resultado;
    });

  useEffect(() => {
    async function carregarPersonagens() {
      try {
        setCarregando(true);

        const dados = await buscarPersonagens();

        setPersonagens(dados);
      } catch (error) {
        setErro('Não foi possível carregar os personagens.');
      } finally {
        setCarregando(false);
      }
    }

    carregarPersonagens();
  }, []);

  if (carregando) {
    return (
      <View style={styles.container}>
        <Text>Carregando personagens...</Text>
      </View>
    );
  }

  if (erro) {
    return (
      <View style={styles.container}>
        <Text>{erro}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <FlatList
        data={personagensFiltrados}

        numColumns={2}

        keyExtractor={(item) => item._id.toString()}

        renderItem={({ item }) => (
          <PersonagemCard
            personagem={item}
            onPress={() => setSelecionado(item)}
          />
        )}

        contentContainerStyle={styles.listaPersonagens}

        ListHeaderComponent={
          <View>

            {/* PESQUISA */}
            <View style={styles.linhaPesquisa}>

              <TextInput
                style={styles.pesquisa}
                placeholder="Pesquisar personagem..."
                value={pesquisa}
                onChangeText={setPesquisa}
              />

            </View>

            {/* CONTADOR */}
            <Text style={styles.resultados}>
              Resultados encontrados: {personagensFiltrados.length}
            </Text>

            {/* ORDENAÇÃO */}
            <View style={styles.linhaOrdem}>

              <TouchableOpacity
                style={styles.botaoOrdem}
                onPress={() => setOrdem('az')}
              >
                <Text style={styles.textoBotao}>
                  A → Z
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.botaoOrdem}
                onPress={() => setOrdem('za')}
              >
                <Text style={styles.textoBotao}>
                  Z → A
                </Text>
              </TouchableOpacity>

            </View>

            {/* FILTRO DE JOGOS */}
            <TouchableOpacity
              style={styles.botao}
              onPress={() => setSomenteJogos(!somenteJogos)}
            >
              <Text style={styles.textoBotao}>

                {somenteJogos
                  ? 'Mostrar todos os personagens'
                  : 'Mostrar somente personagens com jogos'}

              </Text>
            </TouchableOpacity>

            {/* DETALHES */}
            {selecionado && (

              <View style={styles.cardDetalhes}>

                <Text style={styles.tituloDetalhes}>
                  Detalhes do personagem
                </Text>

                <Image
                  source={{ uri: selecionado.imageUrl }}
                  style={styles.imagemDetalhes}
                />

                <Text style={styles.nomePersonagem}>
                  {selecionado.name}
                </Text>

                <Text style={styles.informacao}>
                  ID: {selecionado._id}
                </Text>

                <Text style={styles.informacao}>
                  Filmes: {selecionado.films.length}
                </Text>

                <Text style={styles.informacao}>
                  Séries: {selecionado.tvShows.length}
                </Text>

                <Text style={styles.informacao}>
                  Jogos: {selecionado.videoGames.length}
                </Text>

                <Text style={styles.informacao}>
                  Aliados: {selecionado.allies.length}
                </Text>

                <Text style={styles.informacao}>
                  Inimigos: {selecionado.enemies.length}
                </Text>

              </View>

            )}

          </View>
        }

      />

    </View>
  );
}