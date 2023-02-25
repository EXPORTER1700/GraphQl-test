import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UserService } from 'src/user/user.service';
import { UserEntity } from 'src/user/entities/user.entity';
import { CreateUserDto } from 'src/user/dtos/create-user.dto';
import { UpdateUserDto } from 'src/user/dtos/update-user.dto';
import { LimitQueryDto } from 'src/user/dtos/limit-query.dto';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserEntity)
  public createUser(@Args() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Mutation(() => UserEntity)
  public updateUser(@Args() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(updateUserDto);
  }

  @Query(() => UserEntity)
  public getOneById(@Args('id') id: number) {
    return this.userService.getOneById(id);
  }

  @Query(() => [UserEntity])
  public getUsersList(@Args() limitQueryDto: LimitQueryDto) {
    return this.userService.getUsersList(limitQueryDto);
  }
}
