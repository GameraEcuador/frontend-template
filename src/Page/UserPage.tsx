import { CustomDataTable } from "@/components";
import { useUserStore } from "@/store/hooks/useUserStore";

const columns = [
  {
    name: "Nombre",
    field: "name",
  },
  {
    name: "Apellido",
    field: "lastName",
  },
  {
    name: "Correo electrónico",
    field: "email",
  },
];

export const UserPage = () => {
  const { users, startUpdateUser, startDeleteUser, startCreateUser } =
    useUserStore();

  return (
    <div className="p-4">
      <h1 className="my-2 text-3xl">Creación de usuarios</h1>
      <CustomDataTable
        columns={columns}
        data={users}
        onCreate={startCreateUser}
        onDelete={startDeleteUser}
        onEdit={startUpdateUser}
      />
    </div>
  );
};
