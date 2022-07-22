module.exports = (sequelize, DataTypes) => {
    const Aluno = sequelize.define("Aluno", {
        nome: DataTypes.STRING(200),
        sobrenome: DataTypes.STRING(200),
        ano_matricula: DataTypes.INTEGER
    },
    {
        tableName: "alunos",
        timestamps: false
    });

    return Aluno;
}