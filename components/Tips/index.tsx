import { ITips } from "@/interface";

const Tips = (tips: ITips) => {
  return (
    <div className="p-2.5 bg-secondary rounded border-primary border-0.5">
      <div className="[&>span]:text-gray-scale-80">
        <span className="text-body-medium-semibold">✨ {tips.title}: </span>
        <span className="text-body-medium-regular">
         {tips.description}
        </span>
      </div>
    </div>
  );
};

export default Tips;
