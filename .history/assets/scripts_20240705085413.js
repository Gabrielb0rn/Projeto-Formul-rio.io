document.addEventListener("DOMContentLoaded", () => {
    const estadoSelect = document.getElementById("estado");
    const cidadeSelect = document.getElementById("cidade");
    const submitButton = document.getElementById("submit-button");
    const form = document.getElementById("form");

    const cidadesPorEstado = {
        AC: ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira"],
        AL: ["Maceió", "Arapiraca", "Palmeira dos Índios"],
        AP: ["Macapá", "Santana", "Laranjal do Jari"],
        AM: ["Manaus", "Parintins", "Itacoatiara"],
        BA: ["Salvador", "Feira de Santana", "Vitória da Conquista"],
        CE: ["Fortaleza", "Juazeiro do Norte", "Sobral"],
        DF: ["Brasília"],
        ES: ["Vitória", "Vila Velha", "Serra"],
        GO: ["Goiânia", "Anápolis", "Aparecida de Goiânia"],
        MA: ["São Luís", "Imperatriz", "Caxias"],
        MG: ["Belo Horizonte", "Uberlândia", "Contagem"],
        MS: ["Campo Grande", "Dourados", "Três Lagoas"],
        MT: ["Cuiabá", "Várzea Grande", "Rondonópolis"],
        PA: ["Belém", "Santarém", "Ananindeua"],
        PB: ["João Pessoa", "Campina Grande", "Santa Rita"],
        PE: ["Recife", "Jaboatão dos Guararapes", "Olinda"],
        PI: ["Teresina", "Parnaíba", "Picos"],
        PR: ["Curitiba", "Londrina", "Maringá"],
        RJ: ["Rio de Janeiro", "Niterói", "Petrópolis"],
        RN: ["Natal", "Mossoró", "Parnamirim"],
        RO: ["Porto Velho", "Ji-Paraná", "Ariquemes"],
        RR: ["Boa Vista", "Rorainópolis", "Caracaraí"],
        RS: ["Porto Alegre", "Caxias do Sul", "Pelotas"],
        SC: ["Florianópolis", "Joinville", "Blumenau"],
        SE: ["Aracaju", "Nossa Senhora do Socorro", "Lagarto"],
        SP: ["São Paulo", "Campinas", "Santos"],
        TO: ["Palmas", "Araguaína", "Gurupi"]
    };

    estadoSelect.addEventListener("change", (e) => {
        const cidades = cidadesPorEstado[e.target.value] || [];
        cidadeSelect.innerHTML = cidades.map(cidade => `<option value="${cidade}">${cidade}</option>`).join("");
        cidadeSelect.disabled = cidades.length === 0;
    });

    form.addEventListener("input", () => {
        submitButton.disabled = !form.checkValidity();
    });
});

var form = document.getElementById("my-form");
  
  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form"
          }
        })
      }
    }).catch(error => {
      status.innerHTML = "Oops! There was a problem submitting your form"
    });
  }
  form.addEventListener("submit", handleSubmit)