import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";

interface Props {
  data: Record<string, any>[];
  columns: { name: string; field: string }[];
  onEdit?: (user: Record<string, any>, id: string) => void;
  onDelete?: (id: string) => void;
}

export const CustomDataTable = ({ data, columns, onEdit, onDelete }: Props) => {
  const handleEdit = (user: Record<string, any>) => {
    if (!onEdit) return;
    onEdit(user, user.id);
  };

  const handleDelete = (user: Record<string, any>) => {
    if (!onDelete || !user) return;
    onDelete(user.id);
  };

  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        {[
          ...columns.map((column) => (
            <TableColumn key={column.field}>{column.name}</TableColumn>
          )),
          <TableColumn key="actions">Acciones</TableColumn>,
        ]}
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            {[
              ...columns.map(({ field }) => (
                <TableCell key={field}>{item[field]}</TableCell>
              )),
              <TableCell key="actions-cell">
                {onEdit && (
                  <button
                    className="text-blue-500 hover:underline mr-2"
                    onClick={() => handleEdit(item)}
                  >
                    Editar
                  </button>
                )}
                {onDelete && (
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => handleDelete(item)}
                  >
                    Eliminar
                  </button>
                )}
              </TableCell>,
            ]}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
