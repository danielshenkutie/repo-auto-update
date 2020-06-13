const NodeGit = require('nodegit');
var pathToRepo = require('path').resolve(
  '/Users/danielshenkutie/Desktop/untitled folder/repo-auto-push'
);
var getMostRecentCommit = function (repository) {
  return repository.getBranchCommit('master');
};

var getCommitMessage = function (commit) {
  return commit.message();
};

NodeGit.Repository.open(pathToRepo)
  .then(function (repo) {
    console.log(
      repo.getCommit().then((commit) => console.log(commit.message()))
    );
  })
  .catch(function (error) {
    console.log(error);
  });
