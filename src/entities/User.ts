import { Column, Entity, Long, PrimaryGeneratedColumn } from "typeorm";

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
}

export default User;