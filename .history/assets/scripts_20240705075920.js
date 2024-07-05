document.addEventListener('DOMContentLoaded', function() {
    const estadoSelect = document.getElementById('estado');
    const cidadeSelect = document.getElementById('cidade');
    const form = document.getElementById('form');
    const mensagemDiv = document.getElementById('mensagem');

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
        "SP": ["São Paulo", "Campinas", "Santos"],
        "TO": ["Palmas", "Araguaína", "Gurupi"]
    };

    estadoSelect.addEventListener('change', function() {
        const estado = estadoSelect.value;
        cidadeSelect.innerHTML = '<option value="">Selecione sua cidade</option>';

        if (estado) {
            const cidades = cidadesPorEstado[estado];
            cidades.forEach(function(cidade) {
                const option = document.createElement('option');
                option.value = cidade;
                option.textContent = cidade;
                cidadeSelect.appendChild(option);
            });
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const idade = document.getElementById('idade').value;

        if (!nome || !email || !idade) {
            mensagemDiv.textContent = 'Por favor, preencha todos os campos obrigatórios.';
            mensagemDiv.style.color = 'red';
        } else {
            mensagemDiv.textContent = 'Formulário enviado com sucesso!';
            mensagemDiv.style.color = 'green';
            form.reset();
        }
    });
});
