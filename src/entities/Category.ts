import { Column, Entity, Long, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Transaction from "./Transaction";

export enum Categories {
  SALARY = "Salário",
  FREELANCE = "Freelance",
  INVESTMENTS = "Investimentos",
  OTHER_INCOME = "Outros",

  FOOD = "Alimentação",
  TRANSPORT = "Transporte",
  HOUSING = "Moradia",
  ENTERTAINMENT = "Lazer",
  HEALTH = "Saúde",
  EDUCATION = "Educação",
}

@Entity("categories")
class Category {
  @PrimaryGeneratedColumn({ type: "bigint" })
  id: Long;

  @Column({ type: "varchar" })
  name: string;

  @OneToMany(() => Transaction, (transaction) => transaction.category)
  transactions: Transaction[];
}

export default Category;
