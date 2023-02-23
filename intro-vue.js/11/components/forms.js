const exempleForm = {
    template: `
    <form action="#" method="post">

        <label for="name">
            <input type="text" name="name" placeholder="Nome">
        </label>

        <label for="sexo">
            Sexo:

            <select name="sexo" id="sexo">
                <option value="">Escolha</option>
                <option value="F">Feminino</option>
                <option value="M">Masculino</option>
            </select>
        </label>

        <label for="descricao">
            Descrição:

            <textarea name="descricao" id="descricao" cols="30" rows="10"></textarea>

        </label>

        <label for="agree">
            <input type="checkbox" name="agree">
            Concordo
        </label>

        <button type="submit">Enviar</button>

    </form>
    `,

    data() {
        return {
            
        }
    },
}

app.component('exempleForm', exempleForm);