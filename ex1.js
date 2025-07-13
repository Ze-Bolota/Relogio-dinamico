        function formatarTempo(num) {
            return num < 10 ? '0' + num : num;
        }

        function atualizarRelogio() {
            const msgElement = window.document.getElementById('clock');
            const imagemElement = window.document.getElementById('img');
            const calendarElement = window.document.getElementById('calendar');

            // Variáveis de tempo
            let data = new Date();
            let hora = data.getHours();
            let minutos = data.getMinutes();
            let segundos = data.getSeconds();
            let dia = data.getDate();
            let mes = data.getMonth() + 1; // Janeiro = 0
            let ano = data.getFullYear();
            let horaCompleta = `${formatarTempo(hora)}:${formatarTempo(minutos)}:${formatarTempo(segundos)}`;
            let dataCompleta = `${formatarTempo(dia)}/${formatarTempo(mes)}/${ano}`;

            let saudacao = '';
            let imagemSrc = '';
            let bgColor = '';

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
            msgElement.innerHTML = `${saudacao} agora são exatamente: ${horaCompleta} do dia ${dataCompleta}.`;

            // Atualiza imagem
            if (imagemElement) {
                imagemElement.src = imagemSrc;
            }
            document.body.style.background = bgColor;
        }

        atualizarRelogio(); 
        setInterval(atualizarRelogio, 1000); 
