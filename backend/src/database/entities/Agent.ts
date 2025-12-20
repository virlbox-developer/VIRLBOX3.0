import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import User from "./User";

@Entity("agents")
export default class Agent {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "uuid", unique: true })
  uuid = uuidv4();

  @Column()
  name!: string;

  @Column()
  type!: string;

  @Column()
  category!: string;

  @Column({ type: "text" })
  description!: string;

  @Column({ type: "json", default: [] })
  capabilities!: string[];

  @Column({ type: "json", default: [] })
  successMetrics!: string[];

  @Column({ type: "json", default: [] })
  supportedPlatforms!: string[];

  @Column({ default: true })
  isActive!: boolean;

  @Column({ default: "2.0.0" })
  version!: string;

  @ManyToOne(() => User, user => user.agents, { onDelete: "CASCADE" })
  user!: User;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}

