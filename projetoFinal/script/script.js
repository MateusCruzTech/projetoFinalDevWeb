
const textarea = document.getElementById("comment");
const contador = document.getElementById("contadorCaracteres");


textarea.addEventListener("input", function () {
    contador.textContent = `${textarea.value.length} / 3000`;
});
document
    .getElementById("enviarAvaliacao")
    .addEventListener("click", function () {
        const nome = document.getElementById("nomeUsuario").value;
        const texto =
            document.getElementById("comment").value;

        const estrela =
            document.querySelector(
                'input[name="avaliacao"]:checked'
            );

        if (!texto.trim()) {
            alert("Digite uma avaliação.");
            return;
        }

        if (!estrela) {
            alert("Selecione uma nota.");
            return;
        }
        if (!nome.trim()) {
            alert("Digite seu nome.");
            return;
        }

        if (texto.length > 3000) {
            alert("O comentário deve ter no máximo 3000 caracteres.");
            return;
        }
        const nota =
            Number(
                estrela.id.replace("estrela", "")
            );

        const estrelas =
            "★".repeat(nota) +
            "☆".repeat(5 - nota);

        const novoComentario =
            document.createElement("div");

        novoComentario.className =
            "comentario";

        const primeiraLetra =
            nome.trim().charAt(0).toUpperCase();

        novoComentario.innerHTML = `
    <div class="cabecalhoComentario">

        <div class="avatar">
            ${primeiraLetra}
        </div>

        <div class="dadosUsuario">
            <h4>${nome}</h4>
            <span>Agora mesmo</span>
        </div>

    </div>

    <div class="notaComentario">
        ${estrelas}
    </div>

    <p class="textoComentario">
        ${texto}
    </p>
`;

        document
            .querySelector(".comentariosDinamicos")
            .appendChild(novoComentario);

        document
            .getElementById("comment")
            .value = "";

        document.getElementById("nomeUsuario").value = "";

        estrela.checked = false;
    });




    document.addEventListener("DOMContentLoaded", () => {
    verificarStatusFuncionamento();
});

function verificarStatusFuncionamento() {
    const horarioEl = document.getElementById("horario-texto");
    const statusEl = document.getElementById("status-funcionamento");


    if (!horarioEl || !statusEl) return;

    const texto = horarioEl.innerText; 
    

    const regex = /([A-Za-zç]+)\s+a\s+([A-Za-zç]+):\s+(.*)/i;
    const match = texto.match(regex);

    if (!match) return; 

    const diaInicialStr = match[1].toLowerCase().substring(0, 3);
    const diaFinalStr = match[2].toLowerCase().substring(0, 3);
    const horarioStr = match[3].trim();

    const mapaDias = { 'dom': 0, 'seg': 1, 'ter': 2, 'qua': 3, 'qui': 4, 'sex': 5, 'sab': 6 };
    const diaInicial = mapaDias[diaInicialStr];
    const diaFinal = mapaDias[diaFinalStr];

    const agora = new Date();
    const diaAtual = agora.getDay();
    const horaMinutoAtual = agora.getHours().toString().padStart(2, '0') + ':' + agora.getMinutes().toString().padStart(2, '0');

    let abertoHoje = false;
    if (diaInicial <= diaFinal) {
        abertoHoje = diaAtual >= diaInicial && diaAtual <= diaFinal;
    } else {
        abertoHoje = diaAtual >= diaInicial || diaAtual <= diaFinal;
    }

    let taAberto = false;


    if (abertoHoje) {
        if (horarioStr.toLowerCase().includes('24 horas')) {
            taAberto = true;
        } else {
            const [horaAbertura, horaFechamento] = horarioStr.split(' - ').map(h => h.trim());
            
   
            if (horaAbertura <= horaFechamento) {
            
                if (horaMinutoAtual >= horaAbertura && horaMinutoAtual <= horaFechamento) {
                    taAberto = true;
                }
            } else {
             
                if (horaMinutoAtual >= horaAbertura || horaMinutoAtual <= horaFechamento) {
                    taAberto = true;
                }
            }
        }
    }


    if (taAberto) {
        statusEl.innerText = "Aberto agora";
        statusEl.className = "status-aberto";
    } else {
        statusEl.innerText = "Fechado agora";
        statusEl.className = "status-fechado"; 
    }
}


