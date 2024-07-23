import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Long,
  OneToMany,
  JoinColumn,
  ManyToOne,
  ManyToMany,
} from "typeorm";
import User from "./User";
import Category from "./Category";

@Entity("transactions")
class Transaction {
  @PrimaryGeneratedColumn({ type: "bigint" })
  id: Long;

  @Column({ type: "text", nullable: false })
  description: string;

  @Column({ type: "decimal", precision: 7, scale: 2, nullable: false })
  amount: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.transactions)
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToOne(() => Category, (category) => category.transactions)
  @JoinColumn({ name: "category_id" })
  category: Category;
}

export default Transaction;
