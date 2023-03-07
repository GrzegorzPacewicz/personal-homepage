import {TileWrapper, Title, Description, Link, LinksWrapper, LinkWrapper} from "./styled";

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
            <dt>Demo:</dt>
            <LinkWrapper>
                <Link
                href={demo}
                target="_blank"
                rel="noreferrer"
                >
                {demo}
                </Link>
            </LinkWrapper>
        </LinksWrapper>}
          {gitUrl && <LinksWrapper>
            <dt>Repo:</dt>
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
