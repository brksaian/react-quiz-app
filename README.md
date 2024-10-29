
# Quiz Game App

Este é um aplicativo de perguntas e respostas multijogador offline criado com React Native e TypeScript. O objetivo do jogo é responder corretamente a perguntas de diferentes categorias. Os jogadores ganham pontos por cada resposta correta e desbloqueiam recursos adicionais à medida que avançam.

## Funcionalidades

- **Modo multijogador offline** com turnos
- **Categorias de perguntas**: Artes, Geografia, Esporte, Entretenimento, História e Ciências
- **Escolha de categoria**: Inicialmente e após atingir 20 pontos
- **Troca de pergunta** para evitar repetição
- **Suporte para tema claro e escuro** com Context API
- **Pontuação e gerenciamento de turnos**

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- **Node.js** (versão 14 ou superior)
- **Expo CLI**: Ferramenta de linha de comando do Expo
  ```bash
  npm install -g expo-cli
  ```

## Configuração do Projeto

Siga as etapas abaixo para baixar e configurar o projeto em sua máquina local.

### 1. Clone o Repositório

```bash
git clone https://github.com/brksaian/react-quiz-app.git
cd quiz-game
```

### 2. Instale as Dependências

Execute o seguinte comando para instalar as dependências do projeto:

```bash
npm install
```

### 3. Execute o Aplicativo

Para iniciar o aplicativo no Expo, use o comando:

```bash
npx expo start
```

Esse comando abrirá uma página no seu navegador com o Expo Dev Tools. Você pode escolher rodar o aplicativo em um emulador ou dispositivo físico.

- **Emulador Android**: Clique em "Run on Android device/emulator" (emulador Android deve estar configurado).
- **Emulador iOS**: Clique em "Run on iOS simulator" (disponível apenas no macOS).
- **Dispositivo físico**: Escaneie o QR code com o aplicativo Expo Go instalado no seu celular.

## Estrutura de Arquivos

Aqui estão os principais arquivos e diretórios do projeto:

- **src/contexts**: Contém os contextos (`GameContext` e `ThemeContext`) para gerenciamento de estados globais.
- **src/screens**: Contém as telas do aplicativo (`HomeScreen`, `GameScreen` e `ResultScreen`).
- **src/assets**: Contém o arquivo `questions.json` com as perguntas e respostas.
- **src/components**: Componentes reutilizáveis para o jogo.

## Configuração das Perguntas

As perguntas e respostas são carregadas de um arquivo JSON em `db/questions.json`. Você pode personalizar ou adicionar mais perguntas diretamente neste arquivo.

Exemplo de estrutura do JSON:

```json
[
  {
    "id": 1,
    "question": "Quem pintou a Mona Lisa?",
    "category": "Artes",
    "answer": "Leonardo da Vinci"
  },
  {
    "id": 2,
    "question": "Qual é a capital da França?",
    "category": "Geografia",
    "answer": "Paris"
  }
]
```

## Uso do Aplicativo

1. Abra o aplicativo e selecione o número de jogadores.
2. Escolha uma categoria (na primeira jogada ou após atingir 20 pontos).
3. Responda as perguntas corretamente para ganhar pontos. Ao atingir 20 pontos, os outros jogadores escolhem a categoria.
4. Troque de pergunta se desejar evitar perguntas repetidas.

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento de aplicativos móveis.
- **TypeScript**: Linguagem para tipagem estática.
- **Expo**: Plataforma para desenvolvimento ágil com React Native.
- **Context API**: Gerenciamento de estado para temas e jogo.

## Licença

Este projeto está licenciado sob a MIT License. Sinta-se à vontade para contribuir e adaptar o projeto às suas necessidades.

## Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nome-feature`).
3. Commit suas mudanças (`git commit -m 'Add nova feature'`).
4. Faça o push para a branch (`git push origin feature/nome-feature`).
5. Abra um Pull Request.

**Divirta-se jogando e aprendendo com o Quiz Game App!**
