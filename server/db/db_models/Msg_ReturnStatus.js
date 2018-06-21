/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Msg_ReturnStatus', {
		Msg_ID: {
			type: DataTypes.INTEGER(2),
			allowNull: true,
			primaryKey: true
		},
		Msg_Code: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Msg_Desc: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'Msg_ReturnStatus',
		timestamps: false
	});
};
