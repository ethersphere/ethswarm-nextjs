import * as React from "react";
import Icons, { KademliaIcon, ScalableIcon } from "@/icons/components/index";
import Image from "next/image";

const icons: any = {
  OpenIcon: Icons.OpenIcon,
  DdosIcon: Icons.DdosIcon,
  PrivacyIcon: Icons.PrivacyIcon,
  BuildersIcon: Icons.BuildersIcon,
  CredibleIcon: Icons.CredibleIcon,
  DowntimeIcon: Icons.DowntimeIcon,
  FaultIcon: Icons.FaultIcon,
  GrowIcon: Icons.GrowIcon,
  ConnectIcon: Icons.ConnectIcon,
  Upload2Icon: Icons.Upload2Icon,
  ForkIcon: Icons.ForkIcon,
  JoinIcon: Icons.JoinIcon,
  HostIcon: Icons.HostIcon,
  ExploreIcon: Icons.ExploreIcon,
  DataIcon: Icons.DataIcon,
  UnlimitedIcon: Icons.UnlimitedIcon,
  KademliaIcon: Icons.KademliaIcon,
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
  PriceIcon: Icons.PriceIcon,
  PublicIcon: Icons.PublicIcon,
  ScalableIcon: Icons.ScalableIcon,
  RedistributionIcon: Icons.RedistributionIcon,
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
    return (
      <Image
        src={`/assets/icons/${icon}.png`}
        width={24}
        height={24}
        alt="icon"
      />
    );
  }

  return <IconTag className={className} />;
};

export default Icon;
