import { Entity, PrimaryGeneratedColumn, Column, Repository } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;
}

const post = new Post();
post.message = 'Cédric est un FDP';

Repository.save(post).then();

const allPosts = await Repository.find();
