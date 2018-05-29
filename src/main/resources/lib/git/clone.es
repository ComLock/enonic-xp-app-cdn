const File = Java.type('java.io.File');
const Git = Java.type('org.eclipse.jgit.api.Git');


export default function clone({
    dir,
    uri
} = {}) {
    return Git.cloneRepository()
        //.setCredentialsProvider( entry.getCredentialsProvider() )
        .setDirectory(new File(dir))
        .setURI(uri)
        .setBare(false)
        .call(); // Destination path "..." already exists and is not an empty directory
}
