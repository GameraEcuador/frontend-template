import { CustomModal } from "./CustomModal";

interface DeleteModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onDelete: (id: string) => void;
}

export const DeleteModal = ({
  isOpen,
  setIsOpen,
  onDelete,
}: DeleteModalProps) => {
  const handleDelete = () => {
    onDelete("");
  };

  return (
    <CustomModal
      actionButon={handleDelete}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      textActionButton="Eliminar"
      title="Eliminar elemento"
    >
      <p>¿Estás seguro de que deseas eliminar este elemento?</p>
    </CustomModal>
  );
};
