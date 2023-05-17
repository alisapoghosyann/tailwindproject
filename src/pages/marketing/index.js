import MarketingChallenges from "@/components/marketing/challenges";
import MarketingGeneral from "@/components/marketing/general";
import Market from "@/components/marketing/market";
import WebMarket from "@/components/marketing/web3";

export default function Marketing() {
  return (
    <main>
      <MarketingGeneral />
      <Market />
      <MarketingChallenges />
      <WebMarket />
    </main>
  );
}
