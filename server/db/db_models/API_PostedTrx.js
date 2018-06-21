/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('API_PostedTrx', {
		Id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			primaryKey: true
		},
		CONF_NO: {
			type: DataTypes.INTEGER(10),
			allowNull: true,
		},
		IFN: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		TRX_CODE: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		TRX_AMOUNT: {
			type: DataTypes.REAL,
			allowNull: true
		},
		QTY: {
			type: DataTypes.INTEGER(10),
			allowNull: true
		},
		REMARK: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		RESORT: {
			type: DataTypes.CHAR(15),
			allowNull: true
		},
		OPERA_MSG: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		DATE: {
			type: DataTypes.DATE,
			allowNull: true
		},
		TRX_SUCCESS: {
			type: DataTypes.CHAR(1),
			allowNull: true
		}
	}, {
		tableName: 'API_PostedTrx',
		timestamps: false
	});
};
