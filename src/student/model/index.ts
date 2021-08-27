import { DataTypes, Model } from "sequelize";
import db from "../../config/database";


interface StudentAttributes{
    id: string;
    firstname: string;
    lastname: string;
}

export class StudentInstance extends Model<StudentAttributes> {}

StudentInstance.init(
    {
        id: {
            type: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
         },
         firstname:{
             type: DataTypes.STRING,
             allowNull: false,
         },
         lastname: {
            type: DataTypes.STRING,
            allowNull: false,
         },
    },
    {
        sequelize: db,
        tableName: "students",
        timestamps: false
    }    
);