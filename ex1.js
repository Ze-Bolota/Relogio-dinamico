        // Função auxiliar para adicionar um zero à esquerda
        function formatarTempo(num) {
            return num < 10 ? '0' + num : num;
        }

        function atualizarRelogio() {
            // Estas referências de elementos NÃO mudam durante a execução da função.
            const msgElement = window.document.getElementById('clock'); // Pega o p#clock
            const imagemElement = window.document.getElementById('img'); // Se tiver um <img> com id="img"
            
            // Estas variáveis mudam de valor a cada vez que a função é executada
            let data = new Date(); //Cria o objeto do tempo para armazenar e manipular informações de tempo
            let hora = data.getHours();
            let minutos = data.getMinutes();
            let segundos = data.getSeconds();
            let horaCompleta = `${formatarTempo(hora)}:${formatarTempo(minutos)}:${formatarTempo(segundos)}`;
            
            if (hora >= 0 && hora < 12) {
                saudacao = 'Bom dia,';
                imagemSrc = 'Manha.jpg';
                bgColor = '#FFDBBB'; 
            } else if (hora >= 12 && hora < 18) {
                saudacao = 'Boa tarde,';
                imagemSrc = 'Tarde.jpg'; 
                bgColor = '#FFA07A';
            } else {
                saudacao = 'Boa noite,';
                imagemSrc = 'Noite.jpg'; 
                bgColor = '#10111e';
            }
            
            // Atualiza a mensagem principal no 'p#clock'
            // O ideal é ter um elemento separado para a saudação e outro para a hora se quiser separar
            msgElement.innerHTML = `${saudacao} agora são exatamente: ${horaCompleta}`;


            // Se você tiver um <img> com id="img" no seu HTML:
            if (imagemElement) {
                imagemElement.src = imagemSrc;
            }
            document.body.style.background = bgColor;
        }

        // --- CÓDIGO CHAVE PARA ATUALIZAR A CADA SEGUNDO ---

        // 1. Chama a função uma vez imediatamente para exibir a hora ao carregar
        atualizarRelogio(); 

        // 2. Chama a função a cada 1000 milissegundos (1 segundo)
        setInterval(atualizarRelogio, 1000); 