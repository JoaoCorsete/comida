const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas= [
   
    {
    enunciado: "existe quantas cores de casca de pitaya" ,
          alternativas:[ "3",
         "4"]
        },
        {
            enunciado: "o que é o caju?" ,
            alternativas:[ "fruta",
             "pseudofruta"]
            },
            {
            enunciado: "qual principal lanche de Maringá?" ,
                alternativas:[ "hamburguer",
                 "dogão"]
                },
                {
    enunciado: "qual destes não é uma fruta?" ,
    alternativas:[ "lichia",
      "pinhão"]
                },
                {
    enunciado: "em quanto tempo levou para uma pessoa comer uma pizza de 12 pedaços com garfo e faca?" ,
                    alternativas:[ "aproximadamente 47 segundos",
                      "aproximadamente 26 segundos"]
                    }
                ]