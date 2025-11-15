import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@heroui/react";
import { useState } from "react";

import { CreateModal } from "./CreateModal";
import { DeleteModal } from "./DeleteModal";

interface Props {
  data: Record<string, any>[];
  columns: { name: string; field: string }[];
  onEdit?: (user: Record<string, any>, id: string) => void;
  onDelete?: (id: string) => void;
  onCreate?: () => void;
}

export const CustomDataTable = ({
  data,
  columns,
  onEdit,
  onDelete,
  onCreate,
}: Props) => {
  const [isOpenModal, setIsOpenModal] = useState({
    isEdit: false,
    isDelete: false,
  });

  return (
    <>
      <div className="w-full flex justify-end mb-4">
        <Button
          onPress={() => setIsOpenModal((prev) => ({ ...prev, isEdit: true }))}
        >
          Crear usuario
        </Button>
      </div>
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
                      onClick={() =>
                        setIsOpenModal((prev) => ({ ...prev, isEdit: true }))
                      }
                    >
                      Editar
                    </button>
                  )}
                  {onDelete && (
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() =>
                        setIsOpenModal((prev) => ({ ...prev, isDelete: true }))
                      }
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
      {isOpenModal.isEdit && (
        <CreateModal
          isOpen={isOpenModal.isEdit}
          setIsOpen={() =>
            setIsOpenModal((prev) => ({ ...prev, isEdit: !prev.isEdit }))
          }
          onCreate={onCreate!}
        />
      )}
      {isOpenModal.isDelete && (
        <DeleteModal
          isOpen={isOpenModal.isDelete}
          setIsOpen={() =>
            setIsOpenModal((prev) => ({ ...prev, isDelete: !prev.isDelete }))
          }
          onDelete={onDelete!}
        />
      )}
    </>
  );
};
