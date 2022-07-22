module.exports = (sequelize, DataTypes) => {
    const Turma = sequelize.define("Turma", {
        duracao: DataTypes.INTEGER,
        ano_inicio: DataTypes.INTEGER,
        semestre: DataTypes.TINYINT,
        curso_id: DataTypes.INTEGER.UNSIGNED,
        professor_id: DataTypes.INTEGER.UNSIGNED
    },
    {
        tableName: "turmas",
        timestamps: false
    });

    Turma.associate = (models) => {
        Turma.belongsTo(models.Professor, {
            as: 'professor',
            foreignKey: 'professor_id'
        });
        Turma.belongsTo(models.Curso, {
            as: 'curso',
            foreignKey: 'curso_id'
        });
        Turma.belongsToMany(models.Aluno, {
            as: 'alunos',
            through: 'alunas_has_turmas',
            foreignKey: 'turma_id',
            otherKey: 'aluno_id'
        });
    }

    return Turma;
}