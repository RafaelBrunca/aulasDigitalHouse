module.exports = {
    listar: async (req, res) => {
        const listagemLivros = await db.Livro.findAll();


        res.send(listagemLivros);
    }
}