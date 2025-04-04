document.addEventListener('DOMContentLoaded', () => {
    const sections = ['home', 'cadastro-cliente', 'cadastro-prestador', 'avaliacoes', 'fale', 'admin'];

    sections.forEach(section => {
        document.getElementById(`${section}-link`).addEventListener('click', () => {
            sections.forEach(s => {
                document.getElementById(s).style.display = 'none';
            });
            document.getElementById(section).style.display = 'block';
        });
    });

    // Exemplo de cadastro de cliente
    document.getElementById('btn-cadastrar-cliente').addEventListener('click', () => {
        const nome = document.getElementById('nome-cliente').value;
        const email = document.getElementById('email-cliente').value;
        const telefone = document.getElementById('telefone-cliente').value;

        if (!nome || !email || !telefone) {
            alert('Preencha todos os campos!');
            return;
        }

        alert(`Cliente ${nome} cadastrado com sucesso!`);
        document.getElementById('form-cliente').reset();
    });

    // Exemplo de cadastro de prestador
    document.getElementById('btn-cadastrar-prestador').addEventListener('click', () => {
        const nome = document.getElementById('nome-prestador').value;
        const especialidade = document.getElementById('especialidade-prestador').value;
        const telefone = document.getElementById('telefone-prestador').value;

        if (!nome || !especialidade || !telefone) {
            alert('Preencha todos os campos!');
            return;
        }

        alert(`Prestador ${nome} cadastrado com sucesso!`);
        document.getElementById('form-prestador').reset();
    });

    // Exemplo de sistema de avaliações
    document.getElementById('btn-avaliar').addEventListener('click', () => {
        const clienteId = document.getElementById('cliente-id').value;
        const prestadorId = document.getElementById('prestador-id').value;
        const nota = document.getElementById('nota').value;
        const comentario = document.getElementById('comentario').value;

        if (!clienteId || !prestadorId || !nota || !comentario) {
            alert('Preencha todos os campos!');
            return;
        }

        alert(`Avaliação enviada com sucesso!`);
        document.getElementById('form-avaliacao').reset();
    });
});