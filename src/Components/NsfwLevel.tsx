import { Tooltip } from "replugged/components";
import { SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Types from "../types";

export default ({ Guild }: { Guild: Types.Guild }): React.ReactElement => {
  if (!SettingValues.get("nsfw", defaultSettings.nsfw) || !Guild?.nsfwLevel) return null;
  return (
    <Tooltip text={`Level ${Guild?.nsfwLevel} NSFW`}>
      <img
        className="assthethick-badge assthethick-nsfwLevel"
        src="/assets/ece853d6c1c1cd81f762db6c26fade40.svg"
      />
    </Tooltip>
  );
};
