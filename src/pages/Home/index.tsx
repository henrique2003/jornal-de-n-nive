import { logo, jonas, palestineMap } from '../../assets'

import './styles.css'

export const Home: React.FC = () => {
  return (
    <>
      <main>
        <article>
          <img src={logo} alt="ג'ורנל נינוה" />
        </article>
      </main>
      <div className="hr"></div>
      <main>
        <div className="content">
          <div className="banner"></div>
          <div className="row">
            <section>
              <h1>Homem é engolido por grande peixe! Saiba mais sobre a história de Jonas.</h1>
              <div>
                <p>
                  O profeta Jonas vem a Nínive depois de rejeitar o chamado do Senhor e ser engolido
                  por um grande peixe
                </p>
              </div>
            </section>
            <section>
              <img src={jonas} alt="jonas" />
            </section>
          </div>
          <div className="author">
            <div className="date">07/03/777 A.C</div>
            <p>Por,</p>
            <p>Henrique Cristioglu</p>
          </div>
          <div className="history">
            <h4>História</h4>
            <p>
              Jonas, filho de Amitai, um profeta que vivia na cidade de Gate-Hefer, um vilarejo da
              tribo de Zebulom, atual Galileia, foi chamado certo dia pelo Senhor Deus para que ele
              fosse a grande cidade de Nínive que está localizada na margem leste do Rio Tigre na
              Mesopotâmia, a fim de pregar contra aquelas pessoas, pois pelos seus atos de maldade
              que realizara, Deus os destruiria completamente.
            </p>
            <p>
              Então Jonas ficou com muito medo, pois os assírios eram um povo muito cruel e desumano
              que não via problema em enterrar vivo o inimigo, esfolá-lo vivo ou espetá-lo em
              estacas no sol quente, além de também serem conhecidos como o centro do culto à
              fertilidade.
            </p>
            <p>
              Ele preferia desobedecer ao Senhor a nos ver salvos de nosso julgamento, e então o
              profeta desceu até Jope e pegou o barco para Társis, que está localizada a oeste de
              Gibraltar na foz do Rio Guadalquiver. Na mente de Jonas, fugir para Tarsís era fugir o
              mais longe de casa, e achava que se o fizesse conseguiria renunciar ao chamado de
              profeta e parar de pregar.
            </p>
            <p>
              Logo ao entrar no navio, Jonas ficou aliviado e foi dormir na parte mais afastada do
              convés.
            </p>
            <p>
              Ao começar a viagem o Senhor fez soprar forte vento sobre o mar, e caiu uma tempestade
              tão violenta que o barco ameaçava arrebentar-se. Era estranho, pois no Mar
              Mediterrâneo oriental as tempestades só costumavam ocorrer no fim do outono. A
              violência das águas e da tempestade eram tantas que os marinheiros começaram a lançar
              as cargas no mar, na esperança de salvar o barco e a si mesmos. O capitão fazendo uma
              inspeção em seu navio, encontrou Jonas dormindo em plenitude. Logo foi acordado pelo
              capitão que o ordenou que ele orasse ao deus dele. Como nada acontecia, resolveram
              jogar a sorte para saber o responsável pela desgraça que caíra sobre eles, e a sorte
              caiu sobre Jonas, que ao ser interrogado contou toda a sua história aos marinheiros,
              que ficaram atemorizados por terem a bordo uma pessoa com quem Deus estava bravo,
              afinal eles eram supersticiosos e temiam a ira de Deus.
            </p>
            <p>
              Os marinheiros por mais medo de que estivessem, ainda tentaram remar para chegar à
              praia. E depois de tentarem muito, concluirão que aquela tempestade só iria lhes fazer
              mal por conta de Jonas e resolveram então jogá-lo ao mar.
            </p>
            <p>
              Logo após o ocorrido a tempestade cessou e os marinheiros confirmarão que esta foi a
              decisão correta e que tinham escapado da ira de Deus por pouco. E assim os marinheiros
              reconheceram o Senhor como o verdadeiro Deus através de seu poder e ofereceram-lhe
              sacrifício de ação de graças e consagraram-se a ele.
            </p>
            <p>
              Jonas, porém, estava afundando no mar quando um “grande peixe” o engoliu. “Alguns
              confundem esse peixe com uma baleia ou tubarão por não acreditarem que um peixe seria
              capaz de tal ato. Porém temos que lembrar que Jonas foi claro ao relatar que o peixe
              foi especialmente “preparado” pelo Senhor “.
            </p>
            <p>E o profeta permaneceu na barriga do peixe por três dias e três noites. </p>
            <p>
              O sentimento e a sensação do ocorrido eram devastadores e incomparáveis. E quando
              Jonas desistiu de tudo, ele se voltou para Deus em busca de sua ajuda orando a ele.
            </p>
            <p>
              Assim clamou ao Senhor dando-lhe graças por ter sido salvo do afogamento e
              reconciliando-se com ele.
            </p>
            <p>
              Após ter ficado os três dias e noites na barriga do grande peixe, o Senhor dá ordens
              ao peixe para que o vomite em terra firme.
            </p>
            <p>Então o Senhor falou novamente para Jonas ir a Nínive pregar contra aquele povo.</p>
            <p>
              Agora submetido a Deus, Jonas está pronto para o serviço e obedece ao seu chamado.
            </p>
            <p>
              Seguindo a trilha das caravanas até a região superior do Rio Tigre, o profeta chega
              aqui em Nínive, uma cidade-estado que além dela, ocupa o território à volta, inclusive
              as vilas vizinhas sob o nosso controle. E aqui vivem cerda de um milhão de pessoas.
            </p>
            <p>
              Nínive é uma cidade muito grande sendo necessários 3 dias para atravessar a cidade por
              completo, mas o profeta percorreu-a em um dia proclamando: “Daqui a quarenta dias a
              cidade será destruída”.
            </p>
            <p>
              Todos nós, desde o rei até o mais insignificante súdito, reagimos com sincero
              arrependimento, vestindo de sacos até os nossos animais. Jejuamos e clamamos a Deus
              afim de não sermos destruídos.
            </p>
            <p>
              Assim, vendo o que fizeram e como abandonamos os nossos maus caminhos, Deus se
              arrependeu e não nos destruiu.
            </p>
            <p>
              Vendo isso, Jonas ficou tão irado e enfurecido, que orou a Deus, pois não se
              conformava do porquê o Senhor não teria cumprido sua justiça conosco. Ele até desejou
              ser morto, porque retinha tanto extremo ódio por nós.
            </p>
            <p>
              Depois disso, ele saiu para fora da cidade e se sentou ali a fim de esperar o tempo
              predito pro Deus para ver a destruição da nossa cidade. Então o Senhor Deus fez
              crescer uma planta sobre Jonas, para dar sombra à sua cabeça e livrá-lo do calor, o
              que deu grande alegria a Jonas. Mas na madrugada do dia seguinte, Deus mandou uma
              lagarta parar atacar a planta e ela secou. Ao nascer do sol, Deus trouxe um vento
              oriental muito quente, e o sol bateu na cabeça de Jonas ao ponto de ele quase desmaiar
              e assim ele novamente desejou morrer.
            </p>
            <p>
              E Deus veio a Jonas e lhe perguntou o porquê ele estava com pena dessa planta, afinal
              não foi ele que a plantou, nem cuidou para que ela crescesse. E fez também um
              paralelo, perguntando o porquê ele não deveria se importar com a nossa cidade, que
              abriga mais de cento e vinte mil habitantes que não tinham o mínimo de conhecimento a
              ponto de não diferenciar a mão direita da esquerda e que não tinha o conhecimento do
              certo aos olhos de Deus.
            </p>
            <h4>Conclusão</h4>
            <p>
              Com a história de Jonas, Deus nos deixou o ensinamento de que está interessado em
              todas as pessoas de qualquer nacionalidade ou raça e espera que aqueles que o conheçam
              se dediquem a compartilhar esse conhecimento.
            </p>
          </div>
        </div>
      </main>
      <footer>
        <p>
          Copyright ורנל נינוה. Todos os direitos reservados. É proibida a reprodução do conteúdo
          desta página em qualquer meio de comunicação, eletrônico ou impresso, sem autorização
          escrita da ורנל נינוה.
        </p>
      </footer>
    </>
  )
}
