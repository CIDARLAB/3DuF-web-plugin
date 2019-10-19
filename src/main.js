/**
 * Opens the design on 3DuF.org. Please ensure that the file is available on a public url
 * @param fileurl full public url for 3DuF to open the file
 */
export function openDesign(fileurl) {
    let baseurl = new URL("https://3duf.org/");
    baseurl.searchParams.append("file", fileurl);
    console.log("DAFD Link:", baseurl);
    window.open(baseurl, '_blank');
}

/**
 * Opens the design on 3DuF.org with the specified component modified according to the given parameters
 * @param fileurl full public url for 3DuF to open the file
 * @param componentname component name of the component that needs to change
 * @param params Javascript object key value pairs of parameters that need to change
 */
export function openDesignWithParamChanges(fileurl, componentname, params) {
    let baseurl = new URL("https://3duf.org/");
    baseurl.searchParams.append("file", fileurl);
    baseurl.searchParams.append("componentname", componentname);
    baseurl.searchParams.append('params', JSON.stringify(params));
    console.log("DAFD Link:", baseurl);
    window.open(baseurl, '_blank');
}

/**
 * Opens the design on 3DuF.org with the specified in the DAFD mode
 * @param fileurl full public url for 3DuF to open the file
 * @param componentname component name of the component that needs to change
 * @param params Javascript object key value pairs of parameters that need to change
 */
export function openDesignWithDAFDParams(params) {
    // let baseurl = new URL("https://3duf.org/");
    let baseurl = new URL("file:///Users/krishna/Documents/3DuF/index.html");
    console.log(JSON.stringify(params));
    baseurl.searchParams.append('dafdparams', (JSON.stringify(params)));
    console.log("DAFD Link:", baseurl);
    window.open(baseurl, '_blank');
}