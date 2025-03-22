import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class ProductEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({nullable: true})
    description: string;

    @Column()
    quantity: number;

    @Column()
    category: string;

    @Column({nullable: true})
    image: string;

}