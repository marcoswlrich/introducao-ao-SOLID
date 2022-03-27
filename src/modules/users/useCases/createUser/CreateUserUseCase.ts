import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const existingEmail = this.usersRepository.findByEmail(email);

    if (existingEmail) {
      throw new Error("Email já existe");
    }

    return this.usersRepository.create({
      name,
      email,
    });
  }
}

export { CreateUserUseCase };
