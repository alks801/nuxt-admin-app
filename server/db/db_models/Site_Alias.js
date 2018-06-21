/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Site_Alias', {
		ALIAS: {
			type: DataTypes.STRING(15),
			allowNull: true,
			primaryKey: true
		},
		ACTIVE: {
			type: DataTypes.CHAR(1),
			allowNull: true
		},
		CONNSTR: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		NAME: {
			type: DataTypes.STRING(20),
			allowNull: true
		}
	}, {
		tableName: 'Site_Alias',
		timestamps: false
	});
};
