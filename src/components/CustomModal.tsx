import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title?: string;
  children?: React.ReactNode;
  textActionButton?: string;
  actionButon?: () => void;
}

export const CustomModal = ({
  isOpen,
  setIsOpen,
  title,
  children,
  actionButon,
  textActionButton = "Confirmar",
}: Props) => {
  const handleConfimAction = () => {
    actionButon && actionButon();
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cerrar
              </Button>
              <Button onPress={handleConfimAction}>{textActionButton}</Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
