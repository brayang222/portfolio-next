import { Body } from "@/components/Body";
import { AnimatePresence } from "framer-motion";

export default function Home(router: any) {
  return (
    <AnimatePresence mode="wait">
      <Body key={router.route} />
    </AnimatePresence>
  );
}
