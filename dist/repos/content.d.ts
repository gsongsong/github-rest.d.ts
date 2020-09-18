/**
 * Response if content is a directory
 * https://docs.github.com/en/rest/reference/repos#get-repository-content
 */
export declare type ContentDirectory = ContentDirectoryItem[];
/**
 * Individual item of {@link ContentDirectory}
 * https://docs.github.com/en/rest/reference/repos#get-repository-content
 */
export declare type ContentDirectoryItem = {
    "type": string;
    "size": number;
    "name": string;
    "path": string;
    "sha": string;
    "url": string;
    "git_url": string;
    "html_url": string;
    "download_url": string;
    "_links": {
        "self": string;
        "git": string;
        "html": string;
    };
};
