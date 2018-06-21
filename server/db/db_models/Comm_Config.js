/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Comm_Config', {
		Comm_Group: {
			type: DataTypes.TEXT,
			allowNull: true,
			primaryKey: true
		},
		Comm_Key: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Comm_Value: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'Comm_Config',
		timestamps: false
	});
};
