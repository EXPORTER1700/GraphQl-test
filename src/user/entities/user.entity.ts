import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserEntity {
  @Field(() => Number)
  id: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  login: string;

  @Field()
  password: string;

  @Field(() => Boolean)
  active: boolean;
}
