import { Table, Column, Model } from '../main/app'
import SequelizeTs from '../main/app'
import { DataTypes } from 'sequelize';
const sequelize_ts = new SequelizeTs({
    database: 'test',
    username: 'test',
    password: 'test',
    host: '127.0.0.1',
})

@Table(sequelize_ts)
class User extends Model<User> {
    @Column('名称', DataTypes.STRING, false) name!: Date

    @Column('密码', DataTypes.STRING, false, 'hehe') pass?: string

    @Column('昵称', DataTypes.STRING, true, () => new Date().getTime()) nick?: string
}
