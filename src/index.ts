import { Sequelize, DataTypes, Model } from 'sequelize';
const { STRING } = DataTypes;

const DB_PATH =
	'postgres://iswllwnc:KXBqPOscAv9UJ_m3DyHLKCA7o8Bl3uxT@isabelle.db.elephantsql.com/iswllwnc';

const sequelize = new Sequelize(DB_PATH);

async function main() {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
}

main();

class User extends Model {}

User.init(
	{
		username: {
			type: STRING,
			allowNull: false,
		},
		password: {
			type: STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: 'User',
		tableName: 'Users',
		timestamps: false,
	}
);

// (async () => await User.sync({ alter: true }))();

// (async () => await User.drop())();

// console.log(User === sequelize.models.User); // true

(async () => {
	// await User.create({ username: 'Mary', password: '1793' });
	// await User.create({ username: 'John', password: '4321' });

	const users = await User.findAll({
		where: {
			id: 3,
		},
	});

	users.forEach((user) => console.log(user.dataValues));
})();
