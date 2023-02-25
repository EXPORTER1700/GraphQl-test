import { Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class LimitQueryDto {
  @Field(() => Number)
  limit: number;

  @Field(() => Number)
  offset: number;
}
