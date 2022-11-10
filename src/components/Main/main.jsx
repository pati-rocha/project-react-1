import Subtitle from "../Subtitle/subtitle"
import Section from "../Section/Section"
function Main(){
    return(
        <main className='main'>
        <Subtitle content="Olá, sou a Pati Rocha!!"/>
        <Section 
          path="../public/pati.jpeg"
          content="Desenvolvedora Frontend participante do Bootcamp Todas em Tech da {reprograma}.Curiosa legítima e apreciadora de tecnologia invisto no aprendizado contínuo como forma de aprimorar meus conhecimentos iniciados de forma autônoma.Tenho como objetivo me tornar desenvolvedora especialista com uma pitada generalista.
          "/>
  
          <Subtitle content="Git"/>
          <Section 
          path="../public/git.png"       
          content="O Git é um sistema para controlar versão de códigos e é usado pela grande maioria das pessoas desenvolvedoras atualmente. Isso significa dizer que usando o git a gente pode esquecer o medo de perder alguma alteração que a gente fez no nosso código. Ou se a gente precisar trabalhar em equipe fica super fácil de identificar quem mexeu em cada linha de código ou como resolver conflitos se as pessoas mexerem nas mesmas linhas."/>
  
          <Subtitle content="HTML"/>
          <Section  
          path="../public/html.png"         
          content="HTML é uma abreviação de Hyper Text Markup Language (linguagem de marcação em hipertexto). Ou seja, não se trata de uma linguagem de programação, pois não tem lógica (algoritmos, processos etc). Ele cria a estrutura de uma página ou aplicação web, determinando a separação de layout e conteúdo."/>
  
          <Subtitle content="CSS"/>
          <Section  
          path="../public/css.png" 
          content="CSS é abreviação de Cascading Style Sheet (folha de estilos em cascata). É a linguagem que define estilos para o HTML, portanto, não se trata de linguagem de programação. CSS tem 'cascata' no nome, devido a sua forma de determinar a propriedade de um elemento - levando em consideração hierarquia de seletores e de chamadas de estilo (inline, internal e external). Para fazer o link de um arquivo .css em um documento .html, devemos inserir a tag no do documento, com o href do caminho do arquivo."/>
  
          <Subtitle content="JavaScript"/>
          <Section  
          path="../public/js.png" 
          content="Segundo o livro Estrutura de dados e algoritmos com javascript', de Loiane Groner: Javascript é uma das linguagens de programação mais populares atualmente, é conhecida como a linguagem da internet porque os navegadores a entendem de modo nativo, sem a instalação de qualquer plugin. Praticamente todos os sites e aplicações web usam javascript, até outras ferramentas que são usadas para web, no fim das contas vão precisar transformar o código em javascript para que o navegador entenda."/>
  
          <Subtitle content="React"/>
          <Section  path="../public/react.png"          
          content="React JS é uma biblioteca JavaScript para a criação de interfaces de usuário.
          Criado em 2011 pelo time do Facebook, o React surgiu com o objetivo de otimizar a atualização e a sincronização de atividades simultâneas no feed de notícias da rede social, entre eles chat, status, listagem de contatos e outros. A princípio, todas essas atividades, chamadas de estados, tinham uma descrição muito complexa. Com o React, esta descrição torna-se mais simples, bem como também é simplificada a conexão entre HTML, CSS e JavaScript e todos os componentes de uma página.        
          Por ter demonstrado grande eficiência, nos anos que se seguiram o React foi incorporado à interface de outras redes sociais do grupo, como o Instagram e, em 2013, seu código foi aberto à comunidade, dando início a sua popularização.Hoje, o React é uma das mais prestigiadas bibliotecas de JavaScript do mercado."/>
        </main>

    )
}
export default Main