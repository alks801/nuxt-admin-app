/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('API_Keys', {
		KEY: {
			type: DataTypes.STRING,
			allowNull: true,
			primaryKey: true
		},
		STATUS: {
			type: DataTypes.CHAR(1),
			allowNull: true
		},
		CREATION: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		EXPIRY: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		SITE: {
			type: DataTypes.CHAR(50),
			allowNull: true
		}
	}, {
		tableName: 'API_Keys',
		timestamps: false
	});
};
