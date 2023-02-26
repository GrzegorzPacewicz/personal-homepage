import { TileWrapper, Title, Description, Demo, Link, Repo } from "./styled";

const GitHubTile = ({name, description, gitUrl, demo}) => {

  const formattedName = (name[0].toUpperCase() + name.substring(1)).replaceAll(
    "-",
    " ");
  return (
    <>
      <TileWrapper title={`repository name: ${name}`}>
        <Title>{formattedName}</Title>
        <Description>{description && description}</Description>
        {demo &&
       
            <Demo>
                Demo:
                <Link
                href={demo && ` https://grzegorzpacewicz.github.io/${name}`}
                target="_blank"
                rel="noreferrer"
                >
                {demo}</Link>
        </Demo>}
          {gitUrl &&
            <Repo>
              Repo:
              <Link
                  href={gitUrl}
                  target="_blank"
                  rel="noreferrer"> {gitUrl}</Link>
            </Repo>}
      </TileWrapper>
    </>
  );
};

export default GitHubTile;
