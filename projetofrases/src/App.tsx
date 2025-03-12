import { useState } from "react";
import "./App.css";

import logoImg from "./assets/logo.png";

function App() {
  const [textoFrase, setTextoFrase] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

  const allFrases = [
{
  id: 1,
  nome: "motivação",
  frases: [
    "O esforço de hoje é o sucesso de amanhã.",
  "Acredite em si mesmo e vá além.",
  "Cada passo conta na jornada para o sucesso.",
  "O impossível é só uma questão de perspectiva.",
  "O que você faz hoje reflete no seu futuro.",
  "Desafios são oportunidades disfarçadas.",
  "Acredite no processo, e o resultado virá.",
  "O sucesso começa com a decisão de tentar.",
  "Não pare até se orgulhar.",
  "Grandes conquistas começam com pequenos passos.",
  "Você é mais forte do que imagina.",
  "O maior obstáculo está na sua mente.",
  "A única maneira de falhar é desistir.",
  "Quando você acredita em si, tudo se torna possível.",
  "Os maiores sonhos começam com um único passo.",
  "A perseverança vence todas as dificuldades.",
  "A única limitação que você tem é a que coloca em si mesmo.",
  "O sucesso não é final, o fracasso não é fatal; o que conta é a coragem de continuar.",
  "Cada dia é uma nova chance de fazer a diferença.",
  "O segredo do sucesso é a constância do propósito."
  ]
}, 
{
  id: 2,
  nome: 'bom dia',
  frases: [
    "Bom dia! Que seu dia seja repleto de alegria e boas energias.",
    "Acorde com gratidão e faça do seu dia o melhor possível.",
    "Bom dia! Que a felicidade te acompanhe durante todo o dia.",
    "Hoje é um novo dia para conquistar seus sonhos. Bom dia!",
    "Que o sol brilhe mais forte para iluminar sua jornada. Bom dia!",
    "Bom dia! Aproveite cada momento e faça ele valer a pena.",
    "Que seu dia seja leve, feliz e cheio de boas surpresas.",
    "Bom dia! O dia de hoje é uma nova oportunidade para ser feliz.",
    "Acorde com um sorriso e espalhe luz por onde passar. Bom dia!",
    "Bom dia! Que a paz e o amor estejam presentes no seu dia.",
    "O melhor de hoje começa com um simples bom dia. Que seja incrível!",
    "Bom dia! Que a sua manhã seja repleta de inspiração e energia positiva.",
    "Cada amanhecer é uma chance de recomeçar. Bom dia!",
    "Que seu dia seja cheio de sorrisos e boas vibrações. Bom dia!",
    "Bom dia! Que você tenha um dia produtivo e cheio de conquistas.",
    "A cada amanhecer, nasce uma nova esperança. Bom dia!",
    "Bom dia! Que a felicidade e a saúde te acompanhem em cada passo.",
    "Que o seu dia seja leve, feliz e cheio de boas notícias. Bom dia!",
    "Bom dia! Que você faça do seu dia um momento inesquecível.",
    "A vida é feita de bons dias e bons momentos. Que o seu seja maravilhoso!"
  ]
}

  ]

  return (
    <div className="container">
      <img className="logo" src={logoImg} alt="logo frases" />

      <h2 className="title"> Categorias</h2>
      <section className="category-area">
       
       {allFrases.map((item, index) => (
         <button 
         key={item.id}
         className="category-button">
          
          {item.nome}</button>
       ))}
      
      </section>

      <button className="button-frase">Gerar frases</button>

      {textoFrase !== "" && <p className="textoFrase">{textoFrase}</p>}
    </div>
  );
}

export default App;
