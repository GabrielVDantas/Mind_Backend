import { Column, Entity, Long, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Transaction from "./Transaction";

@Entity("users")
class User {
  @PrimaryGeneratedColumn({ type: "bigint" })
  id: Long;

  @Column({ nullable: false, type: "varchar", length: 200 })
  username: string;

  @Column({ nullable: false, type: "varchar", length: 200, unique: true })
  email: string;

  @Column({ nullable: false, type: "varchar", length: 255 })
  password: string;

  @Column({nullable: false, type: 'longblob'})
  avatar: Buffer;

  @Column({ type: "decimal", precision: 7, scale: 2, default: 0, name: "current_balance" })
  currentBalance: number;

  @OneToMany(() => Transaction, transaction => transaction.user)
  transactions: Transaction[];
}

export default User;