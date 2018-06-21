/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Chn_RoomTypes', {
		Id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			primaryKey: true
		},
		RoomType_Code: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		RoomType_Desc: {
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
		},
		Inventory: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		tableName: 'Chn_RoomTypes',
		timestamps: false
	});
};
