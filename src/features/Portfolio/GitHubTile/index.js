import { TileWrapper, Title, Description, Demo, Link, Repo } from "./styled";

const GitHubTile = () => {
  return (
    <>
      <TileWrapper>
        <Title>Title</Title>
        <Description>
          Project description, e.g. website where you can search for favourite
          movies and people. Project description, e.g. website where you can
          search.
        </Description>
        <Demo>
          Demo: <Link href="https://link.demo.com"> https://link.demo.com</Link>
        </Demo>
        <Repo>
          Repo: <Link href="https://link.demo.com"> https://link.demo.com</Link>
        </Repo>
      </TileWrapper>
    </>
  );
};

export default GitHubTile;
