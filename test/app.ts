import { Table, Column, Model, Unique } from '../main/app'
import SequelizeTs from '../main/app'
import { DataTypes } from 'sequelize';
import { Model_type_inster } from '../main/lib/model_interface';
const sequelize_ts = new SequelizeTs({
    database: 'pch18',
    username: 'pch18',
    password: 'pch18',
    host: '127.0.0.1',
})
console.log('ttt', DataTypes.INTEGER())

@Table(sequelize_ts)
class User extends Model<User> {
    @Unique('name')
    @Column('名称', DataTypes.STRING, false) name!: string

    @Column('密码', DataTypes.STRING, false, 'hehe')
    pass?: string

    @Column('昵称', DataTypes.STRING, true, () => new Date().getTime()) nick?: string
}

sequelize_ts.ModelsReset()
// const a: User['pass'] = undefined

sequelize_ts.AfterModelsReset(async () => {
    const a = await User.create({ name: '1', pass: '1', nick: '1' })
    // console.log(a)

    const b = await User.bulkCreate([{ name: '2', pass: '2', nick: '2' }, { name: '3', pass: '3', nick: '3' }])
    // console.log(b)

    const c = await User.findOne({
        where: {
            name: 1
        }
    })
    console.log(c)

    const d = await User.findById(10)
    console.log(d)



})
