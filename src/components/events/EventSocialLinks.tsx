import ArticleButton from "./social/ArticleButton";
import YouTubeButton from "./social/YouTubeButton";
import LinkedInButton from "./social/LinkedInButton";
import FacebookButton from "./social/FacebookButton";
import ExternalLinkButton from "./social/ExternalLinkButton";

export interface EventSocialLinksProps {
  links?: {
    article?: string;
    youtube?: string;
    linkedin?: string;
    facebook?: string;
    other?: string;
  };
}

export default function EventSocialLinks({ links }: EventSocialLinksProps) {
  if (!links || !Object.values(links).some(Boolean)) return null;

  return (
    <div className="mt-3 flex flex-wrap items-center gap-2">
      {links.article && <ArticleButton href={links.article} />}
      {links.youtube && <YouTubeButton href={links.youtube} />}
      {links.linkedin && <LinkedInButton href={links.linkedin} />}
      {links.facebook && <FacebookButton href={links.facebook} />}
      {links.other && <ExternalLinkButton href={links.other} />}
    </div>
  );
}
