import { getScheduleDetail } from "@/action/schedule";
import SelectedTicket from "@/components/card/selected-ticket";
import { ParamProps } from "@/interface/type";
import PassangerInformationForm from "./component/form";
import { getPassanger } from "@/action/passanger";

const PassangerInformation = async ({ searchParams }: ParamProps) => {
  const scheduleDetail = await getScheduleDetail(searchParams.selected);
  const passanger = await getPassanger()
  
  return (
    <div className="flex flex-col justify-center items-center space-y-4 w-full">
      <div className="flex flex-col justify-center space-y-6 pt-6">
        <p className="text-[36px] text-brand-5 text-center font-[700]">
          Isi Data Penumpang
        </p>
        <PassangerInformationForm schedule={scheduleDetail?.[0]} />
        <div className="space-y-4">
          <SelectedTicket schedule={scheduleDetail?.[0]!} />
        </div>
      </div>
    </div>
  );
};

export default PassangerInformation;
