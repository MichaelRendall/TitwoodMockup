import classes from "./Committee.module.scss";
import CommitteeMember from "./CommitteeMember";
import ChairPerson from "../../assets/committee/chairperson.png";
import Treasurer from "../../assets/committee/treasurer.png";
import CommitteeImg from "../../assets/committee/committee.png";
import Secretary from "../../assets/committee/secretary.png";
import GroundsConvenor from "../../assets/committee/grounds-convenor.png";
import WelfareOfficer from "../../assets/committee/welfare-officer.png";
import Matches from "../../assets/committee/matches.png";
import Website from "../../assets/committee/website.png";
import Membership from "../../assets/committee/membership.jpg";

const Committee = () => {
  return (
    <div className={classes.committee}>
      <div className={classes.committee__section}>
        <CommitteeMember role="Chair" name="Mike Ritchie" img={ChairPerson} />
        <CommitteeMember
          role="Treasurer"
          name="Julie Whitelaw"
          img={Treasurer}
        />
        <CommitteeMember
          role="Committee"
          name="Carol Hannah"
          img={CommitteeImg}
        />
        <CommitteeMember
          role="Secretary"
          name="Scott Thornton"
          img={Secretary}
        />
        <CommitteeMember
          role="Grounds Convenor"
          name="Donald Hannah"
          img={GroundsConvenor}
        />
        <CommitteeMember
          role="Welfare Officer"
          name="Lyz Howie"
          img={WelfareOfficer}
        />
        <CommitteeMember role="Matches" name="Jill Nicolson" img={Matches} />
        <CommitteeMember role="Website" name="Mhairi Taylor" img={Website} />
        <CommitteeMember
          role="Membership"
          name="Martine Eckersall"
          img={Membership}
        />
      </div>
    </div>
  );
};

export default Committee;
