document.addEventListener("DOMContentLoaded", () => {
    const estadoSelect = document.getElementById("estado");
    const cidadeSelect = document.getElementById("cidade");
    const form = document.getElementById("form");
    const submitButton = document.getElementById("submit-button");
    const termsCheckbox = document.getElementById("termos");

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
        validateForm();
    });

    termsCheckbox.addEventListener("change", validateForm);

    form.addEventListener("input", validateForm);

    function validateForm() {
        const requiredFields = form.querySelectorAll("[required]");
        let allFilled = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                allFilled = false;
            }
        });

        if (termsCheckbox.checked && allFilled) {
            submitButton.disabled = false;
            submitButton.style.backgroundColor = "blue";
        } else {
            submitButton.disabled = true;
            submitButton.style.backgroundColor = "grey";
        }
    }

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const formJSON = Object.fromEntries(formData.entries());

        // Verificação dos campos obrigatórios
        let valid = true;
        form.querySelectorAll("[required]").forEach(input => {
            if (!input.value.trim()) {
                valid = false;
                input.classList.add("error");
            } else {
                input.classList.remove("error");
            }
        });

        if (!valid) {
            showAlert("Por favor, preencha todos os campos obrigatórios.", "error");
            return;
        }

        try {
            const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formJSON)
            });

            if (response.ok) {
                showAlert("Formulário enviado com sucesso!", "success");
                form.reset();
                submitButton.style.backgroundColor = "grey";
                submitButton.disabled = true;
            } else {
                showAlert("Houve um erro ao enviar o formulário.", "error");
            }
        } catch (error) {
            console.error("Erro ao enviar o formulário:", error);
            showAlert("Houve um erro ao enviar o formulário.", "error");
        }
    });

    function showAlert(message, type) {
        const alertBox = document.createElement("div");
        alertBox.className = `alert ${type}`;
        alertBox.textContent = message;
        document.body.appendChild(alertBox);

        setTimeout(() => {
            alertBox.remove();
        }, 3000);
    }
});
