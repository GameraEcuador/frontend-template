import {
  onCrateUser,
  onDeleteUser,
  onSetUsers,
  User,
} from "../slices/usersSlice";

import { useAppDispatch, useAppSelector } from "./useStore";

import appApi from "@/api/appApi";

export const useUserStore = () => {
  const { users } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  const startGetUser = async (): Promise<void> => {
    const { data } = await appApi.get("/users");

    dispatch(onSetUsers(data));
  };
  const startCreateUser = async (): Promise<void> => {
    const { data } = await appApi.get("/users/create");

    dispatch(onCrateUser(data));

    return;
  };
  const startUpdateUser = async (
    userData: Partial<User>,
    id: string,
  ): Promise<void> => {
    const { data } = await appApi.put(`/users/update/${id}`, userData);

    dispatch(onCrateUser(data));

    return;
  };
  const startDeleteUser = async (id: string): Promise<void> => {
    await appApi.delete(`/users/delete/${id}`);
    dispatch(onDeleteUser(id));

    return;
  };

  return {
    //Atributes
    users,

    //Methods
    startGetUser,
    startCreateUser,
    startUpdateUser,
    startDeleteUser,
  };
};
