import { Button } from "@/components";
import { PlusIcon } from "@/public/svgs";

const CustomRecommendation = () => {
  const history = [1, 2, 3, 4];

  return (
    <div className="space-y-12">
      <Button
        label={
          <div className="flex justify-center items-center gap-2">
            <PlusIcon />
            <span>Get new recommendation</span>
          </div>
        }
        classNames="max-w-[16.125rem] text-base leading-6 px-0"
      />

      <div className="space-y-6">
        <h3 className="font-semibold text-lg text-grey900 leading-6">
          Recommendation history
        </h3>

        <div className="space-y-4">
          {history.map((item) => (
            <div
              key={item}
              className="max-w-[28.3125rem] text-sm leading-6 flex justify-between items-center p-4 rounded-lg bg-grey100 text-grey800"
            >
              <p className="font-semibold">Requested service recommendation</p>
              <p>20th July 2024</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CustomRecommendation;
