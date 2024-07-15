import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class SignInEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: "varchar", unique: true })
  confirmPassword: string;
}
