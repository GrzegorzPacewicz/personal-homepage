import {TileWrapper, Title, Description, Demo, Link, Repo, LinksWrapper, LinkWrapper} from "./styled";

const GitHubTile = ({name, description, gitUrl, demo}) => {

  const formattedName = (name[0].toUpperCase() + name.substring(1)).replaceAll(
    "-",
    " ");
  return (
    <>
      <TileWrapper title={`repository name: ${name}`}>
        <Title>{formattedName}</Title>
        <Description>{description && description}</Description>
          {demo && <LinksWrapper>
            <Demo>Demo:</Demo>
            <LinkWrapper>
                <Link
                href={demo && ` https://grzegorzpacewicz.github.io/${name}`}
                target="_blank"
                rel="noreferrer"
                >
                {demo && ` https://grzegorzpacewicz.github.io/${name}`}
                </Link>
            </LinkWrapper>
        </LinksWrapper>}
          {gitUrl && <LinksWrapper>
            <Repo>Repo:</Repo>
              <LinkWrapper>
                  <Link
                  href={gitUrl}
                  target="_blank"
                  rel="noreferrer"> {gitUrl}
                  </Link>
              </LinkWrapper>
            </LinksWrapper>}
      </TileWrapper>
    </>
  );
};

export default GitHubTile;
