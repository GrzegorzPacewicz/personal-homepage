import {TileWrapper, Title, Description, Demo, Link, Repo, LinksWrapper} from "./styled";

const GitHubTile = ({name, description, gitUrl, demo}) => {

  const formattedName = (name[0].toUpperCase() + name.substring(1)).replaceAll(
    "-",
    " ");
  return (
    <>
      <TileWrapper title={`repository name: ${name}`}>
        <Title>{formattedName}</Title>
        <Description>{description && description}</Description>
       <LinksWrapper>
        {demo &&
            <Demo>
                Demo:
                <Link
                href={demo && ` https://grzegorzpacewicz.github.io/${name}`}
                target="_blank"
                rel="noreferrer"
                >
                {demo && ` https://grzegorzpacewicz.github.io/${name}`}</Link>
            </Demo>}
       </LinksWrapper>
          <LinksWrapper>
          {gitUrl &&
            <Repo>
              Repo:
              <Link
                  href={gitUrl}
                  target="_blank"
                  rel="noreferrer"> {gitUrl}</Link>
            </Repo>}</LinksWrapper>
      </TileWrapper>
    </>
  );
};

export default GitHubTile;
