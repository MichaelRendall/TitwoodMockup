import Prices from "../components/membership/Prices";
import PageHeader from "../components/UI/PageHeader";

const Membership = () => {
  return (
    <div className="padding">
      <PageHeader title="Membership Information" />
      <Prices />
    </div>
  );
};

export default Membership;
