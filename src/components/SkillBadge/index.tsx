export type SkillProps = {
  name: string;
  iconURL: string;
  link: string;
};

const SkillBadge = (props: SkillProps) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className="relative inline-flex items-center p-3 m-3 min-w-12 text-sm font-medium text-center
                      text-white bg-[#C65D74] rounded-lg "
    >
      <img src={props.iconURL} alt={props.name} className="w-8 h-8 mr-2" />
      <span className="">{props.name}</span>
    </a>
  );
};

export default SkillBadge;
