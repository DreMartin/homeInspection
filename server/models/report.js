module.exports = function (sequelize, DataTypes) {
    return sequelize.define('report', {
        clientName: DataTypes.STRING,
        clientAddress: DataTypes.STRING,
        date: DataTypes.DATE,
        owner: DataTypes.INTEGER,
        notes: DataTypes.STRING,
        propertyNotes: DataTypes.STRING,
        exteriorNotes: DataTypes.STRING,
        garageNotes: DataTypes.STRING,
        roofNotes: DataTypes.STRING,
        plumbingNotes: DataTypes.STRING,
        electricalNotes: DataTypes.STRING,
    });
};