import React from "react";
import Contributors from "../components/contributors/contributors";
import Layout from "../components/layout/layout";
import Maintainers from "../components/maintainers/maintainers";
import CommunityHeroSection from "../components/community-hero-section/community-hero-section";
import SEO from "../components/seo";

const ComunidadPage = () => (
  <Layout>
    <SEO
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      title="Home"
    />
    <div className="mx-auto md:w-1/2 mb-8">Pagina de Cuentas </div>
  </Layout>
);

export default ComunidadPage;
