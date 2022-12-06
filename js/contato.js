export default () => {
    const container = document.createElement("div");

    container.innerHTML = `
    
    <form action="/formulario-contato" method="post">
        <div>
        <label for="nome">Nome:</label>
        <input type="texto" id="nome" name="nome_usuario">
    </div>
    <div>
        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email_usuario">
    </div>
    <div>
        <label for="texto">Texto:</label>
        <textarea id="texto" name="texto_usuario"></textarea>
    </div>
    <button type="button">Enviar</button>
    </form>
    `;

    return container;
}