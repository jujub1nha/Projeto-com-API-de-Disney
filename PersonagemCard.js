import React from 'react';

import {
  TouchableOpacity,
  Image,
} from 'react-native';

import { styles } from '../styles';

export default function PersonagemCard({
  personagem,
  onPress,
}) {

  return (

    <TouchableOpacity
      style={styles.cardPersonagem}
      onPress={onPress}
    >

      <Image
        source={{ uri: personagem.imageUrl }}
        style={styles.imagemPersonagem}
      />

    </TouchableOpacity>

  );
}