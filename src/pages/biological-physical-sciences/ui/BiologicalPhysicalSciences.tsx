import { useTranslation } from "react-i18next";

const BiologicalPhysicalSciences = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-y-20 w-full">
      <h1 className="text-3xl text-center">Biological & Physical Sciences</h1>
    </div>
  );
};

export default BiologicalPhysicalSciences;
