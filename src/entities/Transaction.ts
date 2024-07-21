import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Long,
  OneToMany,
  JoinColumn,
} from "typeorm";
import User from "./User";

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

  @OneToMany(() => User, (user) => user.transactions)
  @JoinColumn({ name: "user_id" })
  user: User;
}

export default Transaction;
