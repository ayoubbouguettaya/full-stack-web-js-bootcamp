import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class OrderEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    customer: string;

    @Column()
    product: string;

    @Column()
    quantity: string;
}