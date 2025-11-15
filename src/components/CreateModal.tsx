import { CustomModal } from "./CustomModal";

interface CreateModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onCreate: () => void;
}

export const CreateModal = ({
  isOpen,
  setIsOpen,
  onCreate,
}: CreateModalProps) => {
  const handleCreate = () => {
    onCreate();
  };

  return (
    <CustomModal
      actionButon={handleCreate}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      textActionButton="Crear"
      title="Crear usuario"
    >
      <p>¿Estás seguro de que deseas crear este usuario?</p>
    </CustomModal>
  );
};
