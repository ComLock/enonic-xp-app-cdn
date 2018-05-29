const File = Java.type('java.io.File');
const Git = Java.type('org.eclipse.jgit.api.Git');


export default function clone({
    dir,
    revision = null,
    uri
}) {
    const git = Git.cloneRepository()
        //.setCredentialsProvider( entry.getCredentialsProvider() )
        .setDirectory(new File(dir))
        .setURI(uri)
        .setBare(false)
        .call(); // Destination path "..." already exists and is not an empty directory
    if (revision) {
        git.checkout().setName(revision).call();
    }
    /*const currentCommitId = git.log().call().iterator().next()
        .getId()
        .getName();
    log.info(currentCommitId);*/
    git.getRepository().close();
    return git;
}
