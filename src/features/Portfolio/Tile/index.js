import { TileWrapper, Title, Description, Demo, Link, Repo } from "./styled";

const GitHubTile = ({name, description, gitUrl, demo}) => {
  return (
    <>
      <TileWrapper title={`repository name: ${name}`}>
        <Title>{name && name}</Title>
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
