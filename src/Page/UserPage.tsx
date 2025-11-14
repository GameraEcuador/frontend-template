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
  const { users, startUpdateUser, startDeleteUser } = useUserStore();

  return (
    <div className="p-4">
      <h1 className="my-2 text-3xl">Creación de usuarios</h1>
      <CustomDataTable
        columns={columns}
        data={users}
        onDelete={startDeleteUser}
        onEdit={startUpdateUser}
      />
    </div>
  );
};
