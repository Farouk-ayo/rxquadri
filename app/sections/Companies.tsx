import React from "react";
import SectionHeader from "../components/sectionHeader";
import CompaniesCard from "../components/companiesCard";

const Companies = () => {
  return (
    <section className="min-h-screen bg-black text-white px-4 sm:px-8 lg:px-16 py-8 ">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="2"
          title="Companies Worked For So Far"
          align="right"
        />
      </div>
      <CompaniesCard />
    </section>
  );
};

export default Companies;
