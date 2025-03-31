import { ABOUT } from "@/constants/about";
import { useTranslations } from "next-intl";
import { Experience } from "./Experience";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";

export const About = ({ isMobile }: { isMobile: boolean }) => {
  const t = useTranslations("about");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return ABOUT.map((item) => (
    <section
      className="flex flex-col text-sm justify-between bg-black-custom text-white lg:px-12 px-4 mt-12 py-8 md:flex-row md:text-base text-start"
      key={item.team}
    >
      <aside className="flex flex-col gap-4">
        <p className="text-white-opacity text-xs">{t(item.about)}</p>
        <p className="max-w-[50ch]">{t(item.aboutText)}</p>
      </aside>
      <aside className="flex flex-col mt-4 md:w-[700px]">
        {!isMobile ? (
          <Experience t={t} item={item} />
        ) : (
          <>
            <Button className="border-2" onPress={onOpen}>
              Ver experiencia
            </Button>
            <Modal isOpen={isOpen} placement="auto" onOpenChange={onOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <section className="bg-black-custom text-white">
                    <ModalHeader className="flex flex-col gap-1">
                      Experiencia
                    </ModalHeader>
                    <ModalBody>
                      <Experience t={t} item={item} />
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Cerrar
                      </Button>
                    </ModalFooter>
                  </section>
                )}
              </ModalContent>
            </Modal>
          </>
        )}
      </aside>
    </section>
  ));
};
