import { ICreateUserTokenDTO } from "../dtos/ICreateUserTokenDTO";
import { UsersTokens } from "../infra/typeorm/entities/UsersTokens";

interface IUsersTokensRepository {
  create({
    expires_date,
    refresh_token,
    user_id,
  }: ICreateUserTokenDTO): Promise<UsersTokens>;
}

export { IUsersTokensRepository };
