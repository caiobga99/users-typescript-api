import {
  IGetUsersController,
  IGetUsersRepository,
} from "./protocols";

export class GetUsersControllers implements IGetUsersController {
  /*
     getUsersRepository: IGetUsersRepository;

  constructor(getUsersRepository: IGetUsersRepository) {
    this.getUsersRepository = getUsersRepository;
  }
    
     */

  constructor(private readonly getUsersRepository: IGetUsersRepository) {}

  async handle() {
    try {
      //validar requisição
      //direcionar chamadas para o repository

      const users = await this.getUsersRepository.getUsers();

      return {
        statusCode: 200,
        body: users,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong.",
      };
    }
  }
}
