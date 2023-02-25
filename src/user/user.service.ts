import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dtos/create-user.dto';
import { usersMock } from 'src/user/users-mock';
import { UpdateUserDto } from 'src/user/dtos/update-user.dto';
import { UserEntity } from 'src/user/entities/user.entity';
import { LimitQueryDto } from 'src/user/dtos/limit-query.dto';

@Injectable()
export class UserService {
  public createUser(dto: CreateUserDto): UserEntity {
    const newUser = {
      ...dto,
      id: usersMock[usersMock.length - 1].id + 1 || 1,
      active: true,
    };

    usersMock.push(newUser);

    return newUser;
  }

  public updateUser({ id, ...fieldsToUpdate }: UpdateUserDto): UserEntity {
    const index = usersMock.findIndex((user) => user.id === id);

    if (index === -1) {
      throw new NotFoundException();
    }

    usersMock[index] = { ...usersMock[index], ...fieldsToUpdate };

    return usersMock[index];
  }

  public getOneById(id: number): UserEntity | null {
    return usersMock.find((user) => user.id === id);
  }

  public getUsersList({ limit, offset }: LimitQueryDto): UserEntity[] {
    return usersMock.slice(offset, offset + limit);
  }
}
