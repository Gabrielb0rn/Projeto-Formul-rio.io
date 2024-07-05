document.addEventListener('DOMContentLoaded', function() {
    const estadoSelect = document.getElementById('estado');
    const cidadeSelect = document.getElementById('cidade');

    const cidadesPorEstado = {
        "AC": ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira"],
        "AL": ["Maceió", "Arapiraca", "Palmeira dos Índios"],
        "AP": ["Macapá", "Santana", "Laranjal do Jari"],
        "AM": ["Manaus", "Parintins", "Itacoatiara"],
        "BA": ["Salvador", "Feira de Santana", "Vitória da Conquista"],
        "CE": ["Fortaleza", "Caucaia", "Juazeiro do Norte"],
        "DF": ["Brasília"],
        "ES": ["Vitória", "Vila Velha", "Serra"],
        "GO": ["Goiânia", "Aparecida de Goiânia", "Anápolis"],
        "MA": ["São Luís", "Imperatriz", "Timon"],
        "MG": ["Belo Horizonte", "Uberlândia", "Contagem"],
        "MS": ["Campo Grande", "Dourados", "Três Lagoas"],
        "MT": ["Cuiabá", "Várzea Grande", "Rondonópolis"],
        "PA": ["Belém", "Ananindeua", "Santarém"],
        "PB": ["João Pessoa", "Campina Grande", "Santa Rita"],
        "PE": ["Recife", "Jaboatão dos Guararapes", "Olinda"],
        "PI": ["Teresina", "Parnaíba", "Picos"],
        "PR": ["Curitiba", "Londrina", "Maringá"],
        "RJ": ["Rio de Janeiro", "Niterói", "Duque de Caxias"],
        "RN": ["Natal", "Mossoró", "Parnamirim"],
        "RO": ["Porto Velho", "Ji-Paraná", "Ariquemes"],
        "RR": ["Boa Vista", "Rorainópolis", "Caracaraí"],
        "RS": ["Porto Alegre", "Caxias do Sul", "Pelotas"],
        "SC": ["Florianópolis", "Joinville", "Blumenau"],
        "SE": ["Aracaju", "Nossa Senhora do Socorro", "Lagarto"],
        "SP": ["São Paulo", "Campinas", "São Bernardo do Campo"],
        "TO": ["Palmas", "Araguaína", "Gurupi"]
    };

    estadoSelect.addEventListener('change', function() {
        const estadoSelecionado = estadoSelect.value;
        cidadeSelect.innerHTML = '<option value="">Selecione sua cidade</option>';

        if (estadoSelecionado) {
            const cidades = cidadesPorEstado[estadoSelecionado];
            cidades.forEach(function(cidade) {
                const option = document.createElement('option');
                option.value = cidade;
                option.textContent = cidade;
                cidadeSelect.appendChild(option);
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const termosCheckbox = document.getElementById('termos');
    const submitButton = document.getElementById('submit-btn');

    termosCheckbox.addEventListener('change', () => {
        submitButton.disabled = !termosCheckbox.checked;
    });

    document.getElementById('form').addEventListener('submit', (event) => {
        if (!termosCheckbox.checked) {
            event.preventDefault();
            alert('Você deve aceitar os termos de serviço para enviar o formulário.');
        }
    });

    document.getElementById('termos-link').addEventListener('click', (event) => {
        event.preventDefault();
        alert('Clicando no botão você está ciente da posse dos seus dados por Gabriel Born SESI SENAI.');
    });
});

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const request = new XMLHttpRequest();
    request.open('POST', 'submit.php', true);

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            const response = JSON.parse(this.response);
            if (response.success) {
                alert('Formulário enviado com sucesso!');
                document.getElementById('form').reset();
            } else {
                alert('Ocorreu um erro ao enviar o formulário.');
            }
        } else {
            alert('Erro no servidor.');
        }
    };

    request.onerror = function() {
        alert('Erro na conexão.');
    };

    request.send(formData);
});
