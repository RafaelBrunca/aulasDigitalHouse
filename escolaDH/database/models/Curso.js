module.exports = (sequelize, DataTypes) => {
    const Curso = sequelize.define("Curso", {
        nome: DataTypes.STRING(200),
        area_id: DataTypes.INTEGER.UNSIGNED
    },
    {
        tableName: "cursos",
        timestamps: false
    });

    Curso.associate = (models) => {
        Curso.belongsTo(models.Area, {
            as: 'area',
            foreignKey: 'area_id'
        })
        Curso.hasMany(models.Turmas, {
            as: 'turmas',
            foreignKey: 'curso_id'
        });
    }

    return Curso;
}