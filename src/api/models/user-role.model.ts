/**
 * User to role mapping information
 */
export interface IUserRole {
    userId: number;
    roleId: number;
}

class UserRole {

  constructor(
    public userId: number,
    public roleId: string
  ) { }

}

export { UserRole };
