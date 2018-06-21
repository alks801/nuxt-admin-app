/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('API_Users', {
		User_ID: {
			type: DataTypes.TEXT,
			allowNull: true,
			primaryKey: true
		},
		User_Login: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		User_FirstNsme: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		User_LastName: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Access_PMS: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Access_SC: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Access_Admin: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Access_Chn: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Access_Configs: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Role: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'API_Users',
		timestamps: false
	});
};
