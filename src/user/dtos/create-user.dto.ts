import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateUserDto {
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
}
