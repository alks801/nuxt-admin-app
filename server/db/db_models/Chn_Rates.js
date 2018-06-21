/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Chn_Rates', {
		Rate_code: {
			type: DataTypes.TEXT,
			allowNull: true,
			primaryKey: true
		},
		Rate_Desc: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Open_From: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		Open_To: {
			type: DataTypes.DATEONLY,
			allowNull: true
		}
	}, {
		tableName: 'Chn_Rates',
		timestamps: false
	});
};
