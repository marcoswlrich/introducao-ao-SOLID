import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userId = this.usersRepository.findById(user_id);

    if (!userId) {
      throw new Error("User not found");
    }

    if (!userId.admin) {
      throw new Error("You are not an admin user");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
