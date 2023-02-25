import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class UpdateUserDto {
  @Field(() => Number, { nullable: true })
  id: number;

  @Field({ nullable: true })
  firstName: string;

  @Field({ nullable: true })
  lastName: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  login: string;

  @Field({ nullable: true })
  password: string;

  @Field(() => Boolean, { nullable: true })
  active: boolean;
}
