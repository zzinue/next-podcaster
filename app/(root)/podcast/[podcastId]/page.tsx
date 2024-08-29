import React from "react";

const PodcastDetails = ({ params }: { params: { podcastId: String } }) => {
  return <p className="text-white-1">Podcast for {params.podcastId}</p>;
};

export default PodcastDetails;
