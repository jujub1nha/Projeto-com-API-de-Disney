// Função responsável por buscar os personagens na API da Disney
export async function buscarPersonagens() {
  const resposta = await fetch(
    'https://api.disneyapi.dev/character'
  );

  const dados = await resposta.json();

  return dados.data;
}