import classes from "./CommitteeMember.module.scss";

const CommitteeMember = (props) => {
  return (
    <div className={classes.committeeMember}>
      <h3>{props.role}</h3>
      <div className={classes.img_container}>
        <img src={props.img} alt={props.role} />
      </div>
      <p>{props.name}</p>
    </div>
  );
};

export default CommitteeMember;
