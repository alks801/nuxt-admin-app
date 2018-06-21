/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Chn_Rates', {
		Id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			primaryKey: true
		},
		Rate_code: {
			type: DataTypes.TEXT,
			allowNull: true
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
