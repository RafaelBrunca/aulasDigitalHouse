module.exports = (sequelize, DataTypes) => {
    const Area = sequelize.define("Area", {
        tipo: DataTypes.STRING(100),
    },
    {
        tableName: "areas",
        timestamps: false
    });

    Area.associate = (models) => {
        Area.hasMany(models.Curso, {
            as: 'curso',
            foreignKey: 'curso_id'
        })
    }

    return Area;
}