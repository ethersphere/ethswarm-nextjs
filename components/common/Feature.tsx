import * as React from "react";
import { FeatureType } from "types";
import { cx } from "utils";
import Button from "./Button";
import Icons from "@/icons/components/index";
import { useEffect, useState } from "react";
import markdownToHtml from "lib/markdownToHtml";
import FeatureBzzPrice from "./FeatureBzzPrice";
import FeatureBzzPot from "./FeatureBzzPot";
import FeatureExchanges from "./FeatureExchanges";

const Feature: React.FC<FeatureType> = ({
  title,
  content,
  icon,
  cta,
  type = "default",
  exchanges = false,
  bzzPrice = false,
  bzzPot = false,
  copyClass = "",
}) => {
  const [md, setMd] = useState(content ?? "");

  useEffect(() => {
    markdownToHtml(content).then((html) => {
      setMd(html);
    });
  }, []);

  const textHeadingClass =
    type === "default" ? "md:text-lg mb-3" : "text-2xl mb-4";

  copyClass =
    copyClass +
    (type === "default"
      ? " pt-2 pb-6 prose prose-sm leading-[20px]"
      : " pt-4 pb-8 md:prose-lg prose md:leading-[26px]");

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
  };

  const IconTag: any = icon ? icons[icon] : false;

  return (
    <div className="flex flex-col">
      <div
        className={cx(
          "inline-flex items-center px-2 font-bold border-l border-current sm:px-4",
          textHeadingClass
        )}
      >
        {title}
      </div>

      {content && content.length > 0 && (
        <div
          className={cx("px-2 sm:px-4", copyClass)}
          dangerouslySetInnerHTML={{
            __html: md,
          }}
        />
      )}

      {exchanges !== false && <FeatureExchanges />}

      {bzzPrice !== false && <FeatureBzzPrice />}

      {bzzPot !== false && <FeatureBzzPot />}

      {IconTag !== false && (
        <div className="flex items-end flex-grow px-2 sm:px-4">
          <IconTag className={type === "default" ? "h-[40px]" : "h-[40px]"} />
        </div>
      )}

      {cta && cta.href.length > 0 && (
        <div className="px-2 sm:-my-2 sm:px-4">
          <Button
            href={cta.href}
            title={cta.title}
            background="transparent"
            color={cta.color ?? "black"}
            arrow={true}
          />
        </div>
      )}
    </div>
  );
};

export default Feature;
