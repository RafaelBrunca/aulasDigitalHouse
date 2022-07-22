module.exports = (sequelize, DataTypes) => {
    const Professor = sequelize.define("Professor", {
        nome: DataTypes.STRING(200),
        sobrenome: DataTypes.STRING(200)
    },
    {
        tableName: "professores",
        timestamps: false
    });

    Professor.associate = (models) => {
        Professor.hasMany(models.Turma, {
            as: 'turmas',
            foreignKey: 'id'
        });
    }

    return Professor;
}