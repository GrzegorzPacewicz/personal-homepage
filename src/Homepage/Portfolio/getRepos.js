const link = "https://api.github.com/users/GrzegorzPacewicz/repos?sort=created&direction=desc"

export const getRepos = async () => {
    const response = await fetch(link);

    if (!response.ok) {
        throw new Error(response.text)
    }
  return await response.json();
};