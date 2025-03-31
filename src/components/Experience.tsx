import { TeamDetail } from "@/types/Projects";

export const Experience = ({ t, item }: any) => {
  return (
    <div className="flex flex-col md:columns-2 gap-4">
      <div className="flex columns-2 gap-4">
        <h3 className="text-white-opacity text-xs min-w-60">{t(item.team)}</h3>
        <h3 className="text-white-opacity text-xs">{t(item.description)}</h3>
      </div>
      {item.teamDetails.map((team: TeamDetail, index: number) => (
        <div className="flex columns-2 gap-4" key={team.id}>
          <p className="w-full md:min-w-60">
            {t(`team-details.${index}.${team.teamName}`)}
            <br />
            {t(`team-details.${index}.${team.teamTimeLine}`)}
          </p>
          <p className="">
            {t(`team-details.${index}.${team.descriptionText}`)}
          </p>
        </div>
      ))}
    </div>
  );
};
