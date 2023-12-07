import { Section, Heading, Links, Link } from "./AppleWatchStyles";

const AppleWatch = () => {
  return (
    <Section>
      <Heading>which apple watch is right for you ?</Heading>
      <Links>
        <Link
          href="https://www.apple.com/uk/shop/buy-watch?afid=p238%7Cs1Uy5BqUr-dc_mtid_187079nc38483_pcrid_677657243673_pgrid_20355516733_pntwk_g_pchan__pexid__&cid=aos-uk-kwgo-watch--slid--category-product-"
          target="_blank"
          rel="noreferrer"
        >
          Compare all Models
        </Link>
        <Link
          href="https://support.apple.com/en-gb"
          target="_blank"
          rel="noreferrer"
        >
          Get Help
        </Link>
      </Links>
    </Section>
  );
};

export default AppleWatch;
