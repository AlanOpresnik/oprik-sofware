import ClientCard from "@/components/Clients/ClientCard/ClientCard";
import Header from "@/presentation/Sections/Header/Header";
import { Code, Globe } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
    <div className="mt-32">
      <ClientCard />
    </div>
    </>
  );
}
