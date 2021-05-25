import { OneToOne } from 'typeorm';
import { User } from './../../user/entities/user.entity';
import { Product } from './../../product/entities/product.entity';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Wish extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (product) => product.id, {
    cascade: ['insert', 'update'],
  })
  product!: Product;

  @ManyToOne(() => User, (user) => user.id, { cascade: ['insert', 'update'] })
  user!: User;

  @Column({ nullable: true })
  detailId: number;

}
