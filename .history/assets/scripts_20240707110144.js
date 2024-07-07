document.addEventListener("DOMContentLoaded", () => {
    const estadoSelect = document.getElementById("estado");
    const cidadeSelect = document.getElementById("cidade");
    const form = document.getElementById("form");
    const submitButton = document.getElementById("submit-button");
    const termsCheckbox = document.getElementById("termos");

    const cidadesPorEstado = {
        AC: ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira"],
        AL: ["Maceió", "Arapiraca", "Palmeira dos Índios"],
        // Adicione as outras cidades aqui
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
            if (!field.value.trim() || (field.type === "checkbox" && !field.checked)) {
                allFilled = false;
            }
        });

        if (termsCheckbox.checked && allFilled) {
            submitButton.disabled = false;
            submitButton.style.backgroundColor = "#007bff";
        } else {
            submitButton.disabled = true;
            submitButton.style.backgroundColor = "#6c757d";
        }
    }
});
