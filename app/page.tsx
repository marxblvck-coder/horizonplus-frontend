import Hero from "@/components/home/Hero";
import Actions from "@/components/home/Actions";
import Mission from "@/components/home/Mission";
import CallToAction from "@/components/home/CallToAction";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Mission />
      <Actions />
      <CallToAction />
    </main>
  );
}