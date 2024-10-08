import Image from "next/image";
import React from "react";

const PodcastCard = ({
  podcastId,
  title,
  description,
  imgURL,
}: {
  podcastId: number;
  title: string;
  description: string;
  imgURL: string;
}) => {
  return (
    <div className="cursor-pointer text-white-1">
      <figure className="flex flex-col gap-2 ">
        <Image
          src={imgURL}
          width={174}
          height={174}
          alt={title}
          className="aspect-square h-fit w-full rounded-2xl 2xl:size-[200px] "
        />
        <div className="flex flex-col">
          <h1 className="text-16 truncate font-bold text-white-1">{title}</h1>
          <h2 className="text-12 truncate font-normal capitalize text-white-4">
            {description}
          </h2>
        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;
