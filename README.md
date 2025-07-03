# ⏰ Relógio e Saudação Dinâmica

Este é um projeto web interativo e simples, construído com HTML, CSS e JavaScript, que exibe a hora atual (com segundos) e ajusta a mensagem de saudação, a imagem principal e a cor de fundo da página de acordo com o período do dia (manhã, tarde ou noite).

## **✨ Funcionalidades**
Exibição da Hora Completa: Mostra a hora atual formatada como HH:MM:SS, atualizando a cada segundo.

Saudação Dinâmica: Altera a mensagem para "Bom dia,", "Boa tarde," ou "Boa noite," com base no horário atual.

Imagem do Dia: A imagem principal (<img id="img">) na página muda para representar visualmente o período do dia (Manhã, Tarde, Noite).

Cor de Fundo Adaptativa: A cor de fundo (body) da página se ajusta para combinar com a atmosfera do período do dia.

Design Básico e Responsivo: O layout é centralizado e busca se ajustar a diferentes tamanhos de tela.

## **🚀 Como Usar**
Para testar e rodar este projeto no seu navegador:

Estrutura de Arquivos: Certifique-se de ter os seguintes arquivos na mesma pasta:

* Relógio dinâmico.html

* ex1.css

* ex1.js

Imagens: Manha.jpg, Tarde.jpg, Noite.jpg e funcionalidade.png (certifique-se de que esses arquivos .jpg e .png estão na mesma pasta que seu Relógio dinâmico.html).

Abra no Navegador: Simplesmente clique duas vezes no arquivo Relógio dinâmico.html ou arraste-o para a janela do seu navegador.

O relógio começará a funcionar automaticamente, e você verá as mudanças de saudação, imagem e cor de fundo conforme o tempo passa.

![Relógio em Funcionamento!][funcionalidade.png]

## **🛠️ Tecnologias Utilizadas**
* HTML5: Para a estrutura básica da página (index.html).

* CSS3: Para estilização e layout, definindo a aparência dos elementos (ex1.css).

* JavaScript (ES6+): Para a lógica dinâmica do relógio, manipulação do DOM e atualização de conteúdo/estilos em tempo real (ex1.js).

## **⚙️ Estrutura do Código**
O projeto está organizado em três arquivos principais:

* Relógio dinâmico.html:

Define a estrutura da página (header, section, footer).

Contém uma div#clock_container com um p#clock para exibir a hora e a saudação.

Inclui uma img#img dentro de div#photo para a imagem do dia.

Linka o arquivo ex1.css para estilos e ex1.js para a lógica.

Usa onload="atualizarRelogio()" no <body> para iniciar o relógio assim que a página carrega.

* ex1.css:

Define os estilos gerais do body (background, fonte).

Estiliza o header, section (com bordas arredondadas e sombra) e footer.

Centraliza o texto dentro de divs e ajusta o padding (embora padding: -3px; possa não ter o efeito desejado, pois padding não aceita valores negativos).

* ex1.js:

formatarTempo(num): Função auxiliar para adicionar um zero à esquerda para números menores que 10 (ex: 5 vira 05).

atualizarRelogio(): A função principal que:

Obtém a hora, minuto e segundo atuais usando new Date().

Formata a hora completa (HH:MM:SS).

Define a saudacao, imagemSrc e bgColor com base na hora atual.

Atualiza o innerHTML de p#clock com a saudação e a hora.

Atualiza o src de img#img e o background do body.

atualizarRelogio();: Executa a função uma vez ao carregar a página.

setInterval(atualizarRelogio, 1000);: Configura a função atualizarRelogio para ser executada a cada 1000 milissegundos (1 segundo), garantindo a atualização em tempo real.

## **💡 Personalização**
Sinta-se à vontade para modificar o projeto:

Cores de Fundo: Altere os valores hexadecimais de bgColor no JavaScript.

Imagens do Dia: Substitua Manha.jpg, Tarde.jpg, Noite.jpg por suas próprias imagens. Lembre-se de manter os nomes ou ajustar os caminhos no JavaScript.

Textos de Saudação: Edite as strings nas variáveis saudacao no JavaScript.

Estilos Visuais: Modifique as propriedades CSS em ex1.css para ajustar fontes, tamanhos, espaçamentos, bordas e sombras.

Estrutura de Conteúdo: Se desejar, separe a saudação da hora em elementos HTML distintos para ter maior controle sobre o estilo de cada um.

Créditos
Desenvolvido por: **@offmaicao_**