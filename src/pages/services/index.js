import ServicesGeneral from "@/components/services/general";
import ServiceMarketing from "@/components/services/marketing";
import ServicePartners from "@/components/services/partners";
import ServicesVentures from "@/components/services/venture";

export default function Services() {
  return (
    <main>
      <ServicesGeneral />
      <ServiceMarketing />
      <ServicesVentures />
      <ServicePartners />
    </main>
  );
}
