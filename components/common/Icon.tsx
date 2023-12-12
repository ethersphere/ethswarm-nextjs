import * as React from "react";
import Icons from "@/icons/components/index";

const icons: any = {
  OpenIcon: Icons.OpenIcon,
  DdosIcon: Icons.DdosIcon,
  PrivacyIcon: Icons.PrivacyIcon,
  CredibleIcon: Icons.CredibleIcon,
  DowntimeIcon: Icons.DowntimeIcon,
  FaultIcon: Icons.FaultIcon,
  GrowIcon: Icons.GrowIcon,
  ConnectIcon: Icons.ConnectIcon,
  Upload2Icon: Icons.Upload2Icon,
  ForkIcon: Icons.ForkIcon,
  PlusIcon: Icons.PlusIcon,
  UnlimitedIcon: Icons.UnlimitedIcon,
  LayersIcon: Icons.LayersIcon,
  UploadIcon: Icons.UploadIcon,
  CompassIcon: Icons.CompassIcon,
  ExpandIcon: Icons.ExpandIcon,
  LockIcon: Icons.LockIcon,
  LeakIcon: Icons.LeakIcon,
  NutIcon: Icons.NutIcon,
  BoxArrowIcon: Icons.BoxArrowIcon,
  HeartIcon: Icons.HeartIcon,
  PullIcon: Icons.PullIcon,
  PushIcon: Icons.PushIcon,
  RetrieveIcon: Icons.RetrieveIcon,
  RouteIcon: Icons.RouteIcon,
  RewardIcon: Icons.RewardIcon,
};

type IconType = {
  icon: string;
  className?: string;
};

const Icon: React.FC<IconType> = ({ icon, className = "" }) => {
  const IconTag: any = icon ? icons[icon] : false;

  if (!IconTag) {
    return null;
  }

  return <IconTag className={className} />;
};

export default Icon;
