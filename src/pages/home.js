import dynamic from "next/dynamic";
import React from "react";
import Layout from "@/components/Layout";
const HomeClient = dynamic(() => import("../components/HomeClient"), {
  ssr: false, // This will disable server-side rendering for HomeClient component
});

function CalculateDateDifference() {
  return (
    <div>
      <Layout>
        <HomeClient />
      </Layout>
    </div>
  );
}

export default CalculateDateDifference; /* is this co pilot*/
